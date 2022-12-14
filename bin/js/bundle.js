(function () {
    'use strict';

    class GameUI extends Laya.Scene {
        constructor() {
            super();
        }
        onAwake() {
            console.log("-----++++++++");
        }
        onDestroy() {
        }
    }

    class CameraMove extends Laya.Script3D {
        constructor() {
            super();
            this.rotaionSpeed = 0.00006;
            this._tempVector3 = new Laya.Vector3();
            this.yawPitchRoll = new Laya.Vector3();
            this.resultRotation = new Laya.Quaternion();
            this.tempRotationZ = new Laya.Quaternion();
            this.tempRotationX = new Laya.Quaternion();
            this.tempRotationY = new Laya.Quaternion();
            this.speed = 0.01;
        }
        onAwake() {
            this.camera = this.owner;
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseRDown);
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseRUp);
        }
        onDestroy() {
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseRDown);
            Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseRUp);
        }
        _updateRotation() {
            if (Math.abs(this.yawPitchRoll.y) < 1.50) {
                Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
                this.tempRotationZ.cloneTo(this.camera.transform.localRotation);
                this.camera.transform.localRotation = this.camera.transform.localRotation;
            }
        }
        onUpdate() {
            var elapsedTime = Laya.timer.delta;
            if (!isNaN(this.isLastMouseX) && !isNaN(this.isLastMouseY) && this.isMouseDown) {
                var scene = this.owner.scene;
                Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-this.speed * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(this.speed * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-this.speed * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(this.speed * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(this.speed * elapsedTime);
                Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-this.speed * elapsedTime);
                var offsetX = Laya.stage.mouseX - this.isLastMouseX;
                var offsetY = Laya.stage.mouseY - this.isLastMouseY;
                var yprElem = this.yawPitchRoll;
                yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime;
                yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime;
                this._updateRotation();
            }
            this.isLastMouseX = Laya.stage.mouseX;
            this.isLastMouseY = Laya.stage.mouseY;
        }
        mouseRDown() {
            console.log("--====++++");
            this.isLastMouseX = Laya.stage.mouseX;
            this.isLastMouseY = Laya.stage.mouseY;
            this.isMouseDown = true;
        }
        mouseRUp() {
            this.isMouseDown = false;
        }
        moveForward(distance) {
            this._tempVector3.x = this._tempVector3.y = 0;
            this._tempVector3.z = distance;
            this.camera.transform.translate(this._tempVector3);
        }
        moveRight(distance) {
            this._tempVector3.y = this._tempVector3.z = 0;
            this._tempVector3.x = distance;
            this.camera.transform.translate(this._tempVector3);
        }
        moveVertical(distance) {
            this._tempVector3.x = this._tempVector3.z = 0;
            this._tempVector3.y = distance;
            this.camera.transform.translate(this._tempVector3, false);
        }
    }

    class GameScene extends Laya.Script {
        constructor() {
            super();
            this.sp3Role = new Laya.Sprite3D();
            this.spMonkey = new Laya.Sprite();
            this.spRole = new Laya.Sprite();
            this.spTrail = new Laya.Sprite();
            this.turnLeft = true;
            this.orthographicPos = new Laya.Vector3(0, 0, 0);
            this._rotation = new Laya.Vector3(0, 0, 0);
            this.rotationW = new Laya.Vector3(0, 0, 0);
            this.rotationS = new Laya.Vector3(0, 180, 0);
            this.rotationA = new Laya.Vector3(0, 90, 0);
            this.rotationD = new Laya.Vector3(0, -90, 0);
        }
        onAwake() {
            this.onMousePoingImage();
        }
        onMousePoingImage() {
            Laya.init(1134, 640, Laya.WebGL);
            Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
            Laya.stage.bgColor = "#232628";
            Laya.loader.load("res/bg.jpg", Laya.Handler.create(this, this.setSpImage));
        }
        setSpImage() {
            console.log("---========99");
            this._bg = new Laya.Sprite();
            this._bg.loadImage("res/bg.jpg", null);
            Laya.stage.addChild(this._bg);
            this.bg2 = new Laya.Sprite();
            this.bg2.loadImage("res/bg.jpg", null);
            Laya.stage.addChild(this.bg2);
            this.bg2.scale(4, 4);
            this.maskSp = new Laya.Sprite();
            this.maskSp.loadImage("res/mask.png");
            this.maskSp.pivot(50, 50);
            this.bg2.mask = this.maskSp;
            Laya.stage.on("mousemove", this, this.onMouseTestMove);
        }
        onMouseTestMove() {
            this.bg2.x = -Laya.stage.mouseX * 2;
            this.bg2.y = -Laya.stage.mouseY * 2;
            this.maskSp.x = Laya.stage.mouseX;
            this.maskSp.y = Laya.stage.mouseY;
        }
        onLoadBurningGround() {
            this.m_scene = Laya.stage.addChild(new Laya.Scene3D());
            var camera = this.m_scene.addChild(new Laya.Camera(0, 0.1, 100));
            camera.transform.translate(new Laya.Vector3(0, 2, 4));
            camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
            camera.clearFlag = Laya.CameraClearFlags.SolidColor;
            camera.clearColor = new Laya.Vector4(0, 0, 0, 1);
            Laya.Sprite3D.load("res/threeDimen/particle/ETF_Eternal_Light.lh", Laya.Handler.create(this, function (sprite) {
                this.m_scene.addChild(sprite);
            }.bind(this)));
        }
        onCreateLightScene() {
            Laya3D.init(0, 0);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.Stat.show();
            Laya.Scene3D.load("res/threeDimen/scene/ParticleScene/Example_01.ls", Laya.Handler.create(this, function (sprite) {
                var scene = Laya.stage.addChild(sprite);
                var camera = scene.addChild(new Laya.Camera(0, 0.1, 100));
                camera.transform.translate(new Laya.Vector3(0, 1, 0));
                camera.addComponent(CameraMove);
            }.bind(this)));
        }
        onCreate2DScene() {
            this.initSet3D();
            this.onIn2DUI();
            Laya.timer.frameOnce(5, this, () => {
                this.sp3ToTexture("res/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh", this.spMonkey, 1);
                this.spMonkey.pos(385, 0);
                this.sp3ToTexture("res/threeDimen/skinModel/dude/dude.lh", this.spRole, 2, true);
                this.spRole.pos(385, 200);
                this.sp3ToTexture("res/threeDimen/trail/Cube.lh", this.spTrail, 3);
                this.spTrail.pos(100, 100);
            });
            Laya.timer.frameLoop(1, this, this.onKeyTDown);
        }
        initSet3D() {
            Laya3D.init(1334, 750);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
            Laya.Stat.show();
            this.m_scene = new Laya.Scene3D();
            Laya.stage.addChild(this.m_scene);
            this.m_scene.addChild(new Laya.DirectionLight());
        }
        sp3ToTexture(lh, sp, layer, isRole = false) {
            Laya.Sprite3D.load(lh, Laya.Handler.create(this, (sp3) => {
                this.m_scene.addChild(sp3);
                var _camera = new Laya.Camera(0, 0.1, 1000);
                this.m_scene.addChild(_camera);
                _camera.transform.rotate(new Laya.Vector3(-45, 0, 0), false, false);
                _camera.orthographic = true;
                _camera.orthographicVerticalSize = 10;
                _camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
                _camera.convertScreenCoordToOrthographicCoord(new Laya.Vector3(800, 700, 0), this.orthographicPos);
                sp3.transform.position = this.orthographicPos;
                sp3.transform.localScale = new Laya.Vector3(1, 1, 1);
                _camera.removeAllLayers();
                _camera.addLayer(layer);
                sp3.getChildAt(0).getChildAt(0).layer = layer;
                _camera.renderTarget = new Laya.RenderTexture(660, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8);
                sp.texture = new Laya.Texture(_camera.renderTarget);
                isRole && (this.sp3Role = sp3);
            }));
        }
        rotateRole(r) {
            if (r === this._rotation)
                return;
            this.sp3Role.transform.rotationEuler = r;
            this._rotation = r;
        }
        onKeyTDown() {
            if (this.spTrail.x < 20 && this.turnLeft)
                this.turnLeft = false;
            else if (this.spTrail.x > (Laya.stage.width - 300) && !(this.turnLeft))
                this.turnLeft = true;
            if (this.turnLeft)
                this.spTrail.x -= 1;
            else
                this.spTrail.x += 1;
            if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W)) {
                this.spRole.y -= 1;
                this.rotateRole(this.rotationW);
            }
            else if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S)) {
                this.spRole.y += 1;
                this.rotateRole(this.rotationS);
            }
            else if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A)) {
                this.spRole.x -= 1;
                this.rotateRole(this.rotationA);
            }
            else if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D)) {
                this.spRole.x += 1;
                this.rotateRole(this.rotationD);
            }
        }
        onIn2DUI() {
            let sceneBackGround = new Laya.Image("res/threeDimen/secne.jpg");
            Laya.stage.addChild(sceneBackGround);
            sceneBackGround.addChild(this.spMonkey);
            sceneBackGround.addChild(this.spRole);
            sceneBackGround.addChild(this.spTrail);
        }
        onCreateScene3D() {
            Laya3D.init(0, 0);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.Stat.show();
            this.onCreateSceneLoad1();
        }
        onCreateSceneLoad1() {
            Laya.Scene3D.load("res/threeDimen/scene/LayaScene_dudeScene/Conventional/dudeScene.ls", Laya.Handler.create(this, function (scene) {
                Laya.stage.addChild(scene);
                console.log("scene", scene);
                var camera = scene.getChildByName("Camera");
                camera.transform.position = new Laya.Vector3(0, 0.81, -1.85);
                camera.transform.rotate(new Laya.Vector3(0, 0, 0), true, false);
                camera.fieldOfView = 60;
                camera.clearColor = new Laya.Vector4(0, 0, 0.6, 1);
                camera.addComponent(CameraMove);
            }));
        }
        onCreateSceneLoad2() {
            Laya.Scene3D.load("res/threeDimen/scene/TerrainScene/XunLongShi.ls", Laya.Handler.create(this, function (scene) {
                Laya.stage.addChild(scene);
                console.log("scene", scene);
                scene.enableFog = true;
                scene.fogColor = new Laya.Vector3(0, 0, 0.6);
                scene.fogStart = 10;
                scene.fogRange = 40;
                scene.ambientColor = new Laya.Vector3(0.6, 0, 0);
                var camera = new Laya.Camera();
                scene.addChild(camera);
                camera.transform.translate(new Laya.Vector3(10, 15, -25));
                camera.transform.rotate(new Laya.Vector3(-20, 170, 0), false, false);
                camera.aspectRatio = 0;
                camera.nearPlane = 0.1;
                camera.farPlane = 1000;
                camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
                camera.fieldOfView = 60;
                camera.addComponent(CameraMove);
                Laya.Material.load("res/threeDimen/skyBox/skyBox2/skyBox2.lmat", Laya.Handler.create(this, function (mat) {
                    var skyRenderer = camera.skyRenderer;
                    skyRenderer.mesh = Laya.SkyBox.instance;
                    skyRenderer.material = mat;
                }));
                var light = scene.addChild(new Laya.DirectionLight());
                light.transform.translate(new Laya.Vector3(0, 2, 5));
                var mat = light.transform.worldMatrix;
                mat.setForward(new Laya.Vector3(0, -5, 1));
                light.transform.worldMatrix = mat;
                light.color = new Laya.Vector3(0.3, 0.3, 0.3);
                scene.getChildByName('Scenes').getChildByName('HeightMap').active = false;
                scene.getChildByName('Scenes').getChildByName('Area').active = false;
            }));
        }
        onCreateScene() {
            console.log("Hello Laya");
            var scene = Laya.stage.addChild(new Laya.Scene3D());
            scene.reflectionIntensity = 1.0;
            this.m_scene = scene;
            var camera = (scene.addChild(new Laya.Camera(0, 0.1, 100)));
            camera.transform.translate(new Laya.Vector3(0, 3, 3));
            camera.name = "MainCamera";
            camera.transform.rotate(new Laya.Vector3(0, 0, 0), true, false);
            var direcLight = scene.addChild(new Laya.DirectionLight());
            direcLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
            var box = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1)));
            box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
            box.transform.position = new Laya.Vector3(0, -2, -20);
            var material = new Laya.BlinnPhongMaterial();
            Laya.Texture2D.load("res/bg2.png", Laya.Handler.create(null, function (tex) {
                material.albedoTexture = tex;
            }));
            box.meshRenderer.material = material;
            scene.enableFog = true;
            scene.fogColor = new Laya.Vector3(250, 0, 0);
            scene.fogStart = 2;
            scene.fogRange = 60;
            this.onAddSkyBox();
        }
        onAddSkyBox() {
            var camera = this.m_scene.getChildByName("MainCamera");
            camera.addComponent(CameraMove);
            Laya.Material.load("res/threeDimen/skyBox/DawnDusk/SkyBox.lmat", Laya.Handler.create(null, function (mat) {
                camera.clearFlag = Laya.CameraClearFlags.Sky;
                var skyrender = camera.skyRenderer;
                skyrender.mesh = Laya.SkyBox.instance;
                skyrender.material = mat;
                this.m_scene.reflection = mat.textureCube;
                mat.exposure = 1.6;
            }.bind(this)));
            Laya.Mesh.load("res/threeDimen/staticModel/teapot/teapot-Teapot001.lm", Laya.Handler.create(this, function (mesh) {
                var teapot = this.m_scene.addChild(new Laya.MeshSprite3D(mesh));
                teapot.transform.position = new Laya.Vector3(0, 3, 1);
                teapot.transform.rotate(new Laya.Vector3(-90, 0, 0), true, false);
                var pbrmat = new Laya.PBRStandardMaterial();
                pbrmat.metallic = 1;
                teapot.meshRenderer.material = pbrmat;
            }.bind(this)));
        }
        onEnable() {
        }
        onDisable() {
        }
        DamagedHelmetModelShow() {
            Laya3D.init(0, 0);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.Scene3D.load("res/threeDimen/scene/PBRScene/Demo.ls", Laya.Handler.create(this, function (scene) {
                Laya.stage.addChild(scene);
                var camera = scene.getChildByName("Camera");
                camera.addComponent(CameraMove);
            }));
        }
    }
    class RotationScript extends Laya.Script3D {
        constructor() {
            super();
            this._mouseDown = false;
            this._rotate = new Laya.Vector3();
            this._autoRotateSpeed = new Laya.Vector3(0, 0.25, 0);
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function () {
                this._mouseDown = true;
                this.lastMouseX = Laya.stage.mouseX;
            });
            Laya.stage.on(Laya.Event.MOUSE_UP, this, function () {
                this._mouseDown = false;
            });
        }
        onUpdate() {
            if (this._mouseDown) {
                var deltax = Laya.MouseManager.instance.mouseX - this.lastMouseX;
                this._rotate.y = deltax * 0.2;
                this.model.transform.rotate(this._rotate, false, false);
                this.lastMouseX = Laya.MouseManager.instance.mouseX;
            }
            else {
                this.model.transform.rotate(this._autoRotateSpeed, false, false);
            }
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("runtimeui/GameUI.ts", GameUI);
            reg("gamelayer/GameScene.ts", GameScene);
        }
    }
    GameConfig.width = 1024;
    GameConfig.height = 768;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "scene/GameScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
