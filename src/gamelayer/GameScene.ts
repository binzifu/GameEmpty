import { CameraMove } from '../runtimeui/CameraMove';
export default class GameScene extends Laya.Script {
    
    private m_scene: Laya.Scene3D;

    private sp3Role: Laya.Sprite3D = new Laya.Sprite3D();
	private spMonkey: Laya.Sprite = new Laya.Sprite();
	private spRole: Laya.Sprite = new Laya.Sprite();
	/** 拖尾的节点精灵 */
	private spTrail: Laya.Sprite = new Laya.Sprite();
	/** 拖尾的当前转向 */
	private turnLeft: boolean = true;
    private orthographicPos: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
	/** 当前所处的旋转方位 */
	private _rotation: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
	private rotationW: Laya.Vector3 = new Laya.Vector3(0, 0, 0);
	private rotationS: Laya.Vector3 = new Laya.Vector3(0, 180, 0);
	private rotationA: Laya.Vector3 = new Laya.Vector3(0, 90, 0);
	private rotationD: Laya.Vector3 = new Laya.Vector3(0, -90, 0);
    constructor() { 
        super();
        // Laya3D.init(0, 0);
        // Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        // Laya.Stat.show();
    }

    onAwake(): void {
       
        // this.onCreateScene();
        // this.onCreateScene3D();
		// this.onCreateLightScene();
        // this.onCreate2DScene();
		// this.onLoadBurningGround();
		// this.DamagedHelmetModelShow();
		this.onMousePoingImage();
    }

	//鼠标所在地放大  原理遮罩
	private onMousePoingImage() {
		Laya.init(1134, 640, Laya.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#232628";

		Laya.loader.load("res/bg.jpg", Laya.Handler.create(this, this.setSpImage));
	}

	private maskSp:Laya.Sprite;
	private bg2:Laya.Sprite;
	private _bg:Laya.Sprite;

	private setSpImage() {
		console.log("---========99");
		
		this._bg = new Laya.Sprite()
		// var spture: Laya.Texture = <Laya.Texture>Laya.loader.getRes("res/bg.jpg");
		// this._bg.graphics.drawTexture(spture, 0, 0);
		this._bg.loadImage("res/bg.jpg", null);
		// this._bg.texture = spture;
		Laya.stage.addChild(this._bg);

		this.bg2 = new Laya.Sprite();
		// spture = <Laya.Texture>Laya.loader.getRes("res/bg.jpg");
		// this.bg2.texture = spture;
		this.bg2.loadImage("res/bg.jpg", null);
		Laya.stage.addChild(this.bg2);
		this.bg2.scale(3, 3);

		this.maskSp = new Laya.Sprite()
		this.maskSp.loadImage("res/mask.png");
		this.maskSp.pivot(50, 50);

		this.bg2.mask = this.maskSp;
		Laya.stage.on("mousemove", this, this.onMouseTestMove);
	}

	private onMouseTestMove():void {
		
		this.bg2.x = -Laya.stage.mouseX * 2;
		this.bg2.y = -Laya.stage.mouseY * 2;

		this.maskSp.x = Laya.stage.mouseX;
		this.maskSp.y = Laya.stage.mouseY;
	}
 
	/** ----------------------------------------------------------------------
	 * 						//加载熔岩 模型 / EternalLight
	 * ----------------------------------------------------------------------
	*/ 
	private onLoadBurningGround() {
		this.m_scene = <Laya.Scene3D>Laya.stage.addChild(new Laya.Scene3D())

		var camera: Laya.Camera = <Laya.Camera>this.m_scene.addChild(new Laya.Camera(0, 0.1, 100));
		camera.transform.translate(new Laya.Vector3(0, 2, 4));
		camera.transform.rotate(new Laya.Vector3(-15, 0, 0), true, false);
		camera.clearFlag = Laya.CameraClearFlags.SolidColor;
		camera.clearColor = new Laya.Vector4(0, 0, 0, 1);

		// Laya.Sprite3D.load("res/threeDimen/particle/ETF_Burning_Ground.lh", Laya.Handler.create(this, function (sprite3D: Laya.Sprite3D) {
		// 	<Laya.Sprite3D>this.m_scene.addChild(sprite3D);
		// }.bind(this)))

		Laya.Sprite3D.load("res/threeDimen/particle/ETF_Eternal_Light.lh", Laya.Handler.create(this, function (sprite: Laya.Sprite3D): void {
			(<Laya.Sprite3D>this.m_scene.addChild(sprite));
		}.bind(this)))
	}
	/** ----------------------------------------------------------------------
	 * 								//创建光场景
	 * ----------------------------------------------------------------------
	*/  
	private onCreateLightScene() {
		Laya3D.init(0, 0);
		Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
		Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
		Laya.Stat.show();

		Laya.Scene3D.load("res/threeDimen/scene/ParticleScene/Example_01.ls", Laya.Handler.create(this, function (sprite: Laya.Scene3D): void {
			var scene: Laya.Scene3D = <Laya.Scene3D>Laya.stage.addChild(sprite);
			var camera: Laya.Camera = <Laya.Camera>scene.addChild(new Laya.Camera(0, 0.1, 100));
			camera.transform.translate(new Laya.Vector3(0, 1, 0));
			camera.addComponent(CameraMove);
		}.bind(this)));
	}

	/** ----------------------------------------------------------------------
	 * 								//创建2d场景 添加3D模型
	 * ----------------------------------------------------------------------
	*/  
    private onCreate2DScene(){
        this.initSet3D();
        this.onIn2DUI();
        //由于2D与3D混合，要涉及到屏幕适配后的像素数值转换，最好延迟几帧，保障屏幕适配值正确后再执行相关逻辑。如果是继承了引擎的Script，可以不用延迟，直接写到onStart生命周期里即可
		Laya.timer.frameOnce(5, this, () => {
			this.sp3ToTexture("res/threeDimen/skinModel/LayaMonkey/LayaMonkey.lh", this.spMonkey, 1);
			this.spMonkey.pos(385, 0);
			this.sp3ToTexture("res/threeDimen/skinModel/dude/dude.lh", this.spRole, 2, true);
			this.spRole.pos(385, 200);
			this.sp3ToTexture("res/threeDimen/trail/Cube.lh", this.spTrail, 3);
			this.spTrail.pos(100, 100);
		});

		//每帧循环
		Laya.timer.frameLoop(1, this, this.onKeyTDown);
    }

    private initSet3D() {
        Laya3D.init(1334, 750);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.Stat.show();
        this.m_scene = new Laya.Scene3D();
        Laya.stage.addChild(this.m_scene);
        this.m_scene.addChild(new Laya.DirectionLight());
    }

    /** 加载3D精灵画到2D Texture上 
	 * @param lh 模型的字符串路径
	 * @param sp 2D精灵节点，用于画3D的texture
	 * @param layer 手动指定层ID
	 * @param isRole 是否是可以被控制的主角
	*/
	sp3ToTexture(lh: string, sp: Laya.Sprite, layer: number, isRole: boolean = false): void {
		//加载模型，并在加载完之后的回调函数里处理逻辑
		Laya.Sprite3D.load(lh, Laya.Handler.create(this, (sp3: Laya.Sprite3D): void => {
			//把加载完的3D精灵添加到3D场景
			this.m_scene.addChild(sp3);

			//创建一个3D摄像机
			var _camera: Laya.Camera = new Laya.Camera(0, 0.1, 1000);
			this.m_scene.addChild(_camera);
			//调整摄像机角度
			_camera.transform.rotate(new Laya.Vector3(-45, 0, 0), false, false);

			//设置正交相机模式
			_camera.orthographic = true;
			//正交投影垂直矩阵尺寸
			_camera.orthographicVerticalSize = 10;
			_camera.clearColor = new Laya.Vector4(0, 0, 0, 0);
			//转换2D屏幕坐标系统到3D正交投影下的坐标系统
			_camera.convertScreenCoordToOrthographicCoord(new Laya.Vector3(800, 700, 0), this.orthographicPos);
			sp3.transform.position = this.orthographicPos;
			//初始化精灵缩放比例
			sp3.transform.localScale = new Laya.Vector3(1, 1, 1);

			//如果有多个3D需要分别显示控制，清除别的层，用于每一个层只显示一个，只有一个的话，可以不使用层
			_camera.removeAllLayers();
			//添加一个摄像机层
			_camera.addLayer(layer);
            // console.log("sp3", sp3);
            
			//一定要给对应的渲染对象节点设置层与摄像机一样的层，如果不清楚是哪个节点，就写个循环，把所有节点都遍历设置一下，否则会影响显示结果
			(<Laya.Sprite3D>sp3.getChildAt(0).getChildAt(0)).layer = layer;

			//把3D画到512宽高的纹理上，再添加到摄像机的目标纹理，形成动态绑定(一个摄像机只能绑一个，要绑多个就要创建多个摄像机)
			_camera.renderTarget = new Laya.RenderTexture(660, 512, Laya.RenderTextureFormat.R8G8B8A8, Laya.RenderTextureDepthFormat.DEPTHSTENCIL_24_8)
			//再将离屏3D画到2D节点上，至此，就完成把3D画到2D的基础渲染流程
			sp.texture = new Laya.Texture(_camera.renderTarget);

			//根据参数决定是否要控制哪个节点
			isRole && (this.sp3Role = sp3);
		}));
	}

    /** 改变角色的朝向 
	 * @param r Vector3旋转值
	 */
	private rotateRole(r: Laya.Vector3): void {
		if (r === this._rotation) return;
		//按世界坐标改变到指定的方位
		this.sp3Role.transform.rotationEuler = r;
		//纪录当前方位，避免重复改变
		this._rotation = r;
	}

    /** 在每帧的循环里帧听键盘事件并作出对应的操作逻辑 */
	private onKeyTDown(): void {
		//调整拖尾转向
		if (this.spTrail.x < 20 && this.turnLeft) this.turnLeft = false;
		else if (this.spTrail.x > (Laya.stage.width - 300) && !(this.turnLeft)) this.turnLeft = true;
		//控制拖尾的自动移动
		if (this.turnLeft) this.spTrail.x -= 1;
		else this.spTrail.x += 1;

		if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.W)) {
			this.spRole.y -= 1;
			this.rotateRole(this.rotationW);
		} else if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.S)) {
			this.spRole.y += 1;
			this.rotateRole(this.rotationS);
		} else if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.A)) {
			this.spRole.x -= 1;
			this.rotateRole(this.rotationA);
		} else if (Laya.KeyBoardManager.hasKeyDown(Laya.Keyboard.D)) {
			this.spRole.x += 1;
			this.rotateRole(this.rotationD);
		}
	}

    private onIn2DUI() {
        let sceneBackGround: Laya.Image = new Laya.Image("res/threeDimen/secne.jpg");
        Laya.stage.addChild(sceneBackGround);
        sceneBackGround.addChild(this.spMonkey);
		sceneBackGround.addChild(this.spRole);
		sceneBackGround.addChild(this.spTrail);
    }

	/** ----------------------------------------------------------------------
	 * 				//直接加载3D场景  SceneLoad2/SceneLoad1
	 * ----------------------------------------------------------------------
	*/  
    
    private onCreateScene3D(){
		//初始化引擎
		Laya3D.init(0, 0);
		Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
		Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
		//显示性能面板
		Laya.Stat.show();

		this.onCreateSceneLoad1();
		// this.onCreateSceneLoad2();
    }

	private onCreateSceneLoad1() {
		//加载场景
		Laya.Scene3D.load("res/threeDimen/scene/LayaScene_dudeScene/Conventional/dudeScene.ls", Laya.Handler.create(this, function (scene: Laya.Scene3D): void {
			(<Laya.Scene3D>Laya.stage.addChild(scene));
            console.log("scene", scene);
            
			//获取场景中的相机
			var camera: Laya.Camera = (<Laya.Camera>scene.getChildByName("Camera"));
			//移动摄像机位置
			camera.transform.position = new Laya.Vector3(0, 0.81, -1.85);
			//旋转摄像机角度
			camera.transform.rotate(new Laya.Vector3(0, 0, 0), true, false);
			//设置摄像机视野范围（角度）
			camera.fieldOfView = 60;
			//设置背景颜色
			camera.clearColor = new Laya.Vector4(0, 0, 0.6, 1);
			//加入摄像机移动控制脚本
			camera.addComponent(CameraMove);

			//设置灯光环境色
			//scene.ambientColor = new Laya.Vector3(2.5, 0, 0);
		}));
	}

	private onCreateSceneLoad2() {
		Laya.Scene3D.load("res/threeDimen/scene/TerrainScene/XunLongShi.ls", Laya.Handler.create(this, function (scene: Laya.Scene3D): void {
			Laya.stage.addChild(scene);
			console.log("scene", scene);
			
			//开启雾化效果
			scene.enableFog = true;
			//设置雾化的颜色
			scene.fogColor = new Laya.Vector3(0, 0, 0.6);
			//设置雾化的起始位置，相对于相机的距离
			scene.fogStart = 10;
			//设置雾化最浓处的距离。
			scene.fogRange = 40;
			//设置场景环境光
			scene.ambientColor = new Laya.Vector3(0.6, 0, 0);

			//添加相机
			var camera: Laya.Camera = new Laya.Camera();
			scene.addChild(camera);
			//调整相机的位置
			camera.transform.translate(new Laya.Vector3(10, 15, -25));
			camera.transform.rotate(new Laya.Vector3(-20, 170, 0), false, false);
			//设置相机横纵比
			camera.aspectRatio = 0;
			//设置相机近距裁剪
			camera.nearPlane = 0.1;
			//设置相机远距裁剪
			camera.farPlane = 1000;
			//相机设置清楚标记
			camera.clearFlag = Laya.BaseCamera.CLEARFLAG_SKY;
			//设置摄像机视野范围（角度）
			camera.fieldOfView = 60;
			//设置背景颜色
			//camera.clearColor = new Vector4(0,0,0.6,1);    
			//加入摄像机移动控制脚本
			camera.addComponent(CameraMove);

			//加载相机天空盒材质
			Laya.Material.load("res/threeDimen/skyBox/skyBox2/skyBox2.lmat", Laya.Handler.create(this, function (mat: Laya.Material): void {
				var skyRenderer: Laya.SkyRenderer = camera.skyRenderer;
				skyRenderer.mesh = Laya.SkyBox.instance;
				skyRenderer.material = mat;
			}));

			//创建方向光
			var light: Laya.DirectionLight = (<Laya.DirectionLight>scene.addChild(new Laya.DirectionLight()));
			//移动灯光位置
			light.transform.translate(new Laya.Vector3(0, 2, 5));
			//调整灯光方向
			var mat: Laya.Matrix4x4 = light.transform.worldMatrix;
			mat.setForward(new Laya.Vector3(0, -5, 1));
			light.transform.worldMatrix = mat;
			//设置灯光漫反射颜色
			light.color = new Laya.Vector3(0.3, 0.3, 0.3);

			//激活场景中的两个子节点
			((<Laya.MeshSprite3D>scene.getChildByName('Scenes').getChildByName('HeightMap'))).active = false;
			((<Laya.MeshSprite3D>scene.getChildByName('Scenes').getChildByName('Area'))).active = false;
		}));
	}
	
	/** ----------------------------------------------------------------------
	 * 								//创建3D场景  在加载天空盒子
	 * ----------------------------------------------------------------------
	*/  
    
    private onCreateScene() {
        console.log("Hello Laya");
        var scene: Laya.Scene3D = Laya.stage.addChild(new Laya.Scene3D()) as Laya.Scene3D;
        scene.reflectionIntensity = 1.0;
        this.m_scene = scene;

        //添加相机
        var camera: Laya.Camera = (scene.addChild(new Laya.Camera(0, 0.1, 100))) as Laya.Camera;
        camera.transform.translate(new Laya.Vector3(0, 3, 3));
        camera.name = "MainCamera";
        camera.transform.rotate(new Laya.Vector3(0, 0, 0), true, false);

        var direcLight: Laya.DirectionLight = scene.addChild(new Laya.DirectionLight()) as Laya.DirectionLight;
        direcLight.color = new Laya.Vector3(0.6, 0.6, 0.6);
        // direcLight.transform.worldMatrix.setForward(new Laya.Vector3(1, -1, 0));

        //添加自定义模型
        var box: Laya.MeshSprite3D = scene.addChild(new Laya.MeshSprite3D(Laya.PrimitiveMesh.createBox(1, 1, 1))) as Laya.MeshSprite3D;
        box.transform.rotate(new Laya.Vector3(0, 45, 0), false, false);
        box.transform.position = new Laya.Vector3(0, -2, -20);
        var material: Laya.BlinnPhongMaterial = new Laya.BlinnPhongMaterial();
        Laya.Texture2D.load("res/bg2.png", Laya.Handler.create(null, function(tex:Laya.Texture2D) {
            material.albedoTexture = tex;
        }));
        box.meshRenderer.material = material;

        //设置场景雾化
        scene.enableFog = true;
        //雾化颜色
        scene.fogColor = new Laya.Vector3(250, 0, 0);
        //雾化起始位置, 相对于相机的距离
        scene.fogStart = 2;
        //雾化最浓处的距离
        scene.fogRange = 60;

        this.onAddSkyBox();
    }

    private onAddSkyBox() {
        var camera: Laya.Camera = this.m_scene.getChildByName("MainCamera") as Laya.Camera;
        camera.addComponent(CameraMove);
        

        //加载天空盒子
        Laya.Material.load("res/threeDimen/skyBox/DawnDusk/SkyBox.lmat", Laya.Handler.create(null, function (mat: Laya.SkyBoxMaterial) {
            camera.clearFlag = Laya.CameraClearFlags.Sky;
            var skyrender = camera.skyRenderer;
            skyrender.mesh = Laya.SkyBox.instance;
            skyrender.material = mat;
            this.m_scene.reflection = mat.textureCube;
            mat.exposure = 1.6;
        }.bind(this)));

        //加载mesh
        Laya.Mesh.load("res/threeDimen/staticModel/teapot/teapot-Teapot001.lm", Laya.Handler.create(this, function (mesh:Laya.Mesh) {
            var teapot = <Laya.MeshSprite3D>this.m_scene.addChild(new Laya.MeshSprite3D(mesh));
            teapot.transform.position = new Laya.Vector3(0, 3, 1);
            teapot.transform.rotate(new Laya.Vector3(-90, 0, 0), true, false);
            var pbrmat: Laya.PBRStandardMaterial = new Laya.PBRStandardMaterial();
            pbrmat.metallic = 1;
            teapot.meshRenderer.material = pbrmat;
        }.bind(this)))
    }
    
    onEnable(): void {
    }

    onDisable(): void {
    }

	/** ----------------------------------------------------------------------
	 * 	//CerberusModelShow	//DamagedHelmetModelShow //GhostModelShow
	 * ----------------------------------------------------------------------
	*/  

	private DamagedHelmetModelShow() {
		Laya3D.init(0, 0);
		Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
		Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

		//-----------------------------------------------------
		//DamagedHelmetModelShow
		//-----------------------------------------------------
		// Laya.Scene3D.load("res/threeDimen/scene/LayaScene_DamagedHelmetScene/Conventional/DamagedHelmetScene.ls", Laya.Handler.create(this, function (scene: Laya.Scene3D) {
		// 	Laya.stage.addChild(scene);
		// 	var model: Laya.MeshSprite3D = <Laya.MeshSprite3D>scene.getChildAt(1).getChildAt(0);
		// 	var rorarionspript: RotationScript = model.addComponent(RotationScript);
		// 	rorarionspript.model = model;
		// 	console.log("scene", scene);
		// }));

		//-----------------------------------------------------
		//CerberusModelShow
		//-----------------------------------------------------
		// Laya.Scene3D.load("res/threeDimen/scene/LayaScene_CerberusScene/Conventional/CerberusScene.ls", Laya.Handler.create(this, function (scene: Laya.Scene3D) {
		// 	Laya.stage.addChild(scene);
		// 	scene.ambientMode = Laya.AmbientMode.SphericalHarmonics;
		// 	var model: Laya.Sprite3D = <Laya.Sprite3D>scene.getChildByName("Cerberus_LP");
		// 	var rorarionspript: RotationScript = model.addComponent(RotationScript);
		// 	rorarionspript.model = model;
		// 	console.log("scene", scene);
		// }));

		//-----------------------------------------------------
		//GhostModelShow
		//-----------------------------------------------------
		Laya.Scene3D.load("res/threeDimen/scene/PBRScene/Demo.ls", Laya.Handler.create(this, function (scene: Laya.Scene3D) {
			Laya.stage.addChild(scene);
			var camera: Laya.Camera = <Laya.Camera>scene.getChildByName("Camera");
			camera.addComponent(CameraMove);
		}));
	}
}

class RotationScript extends Laya.Script3D {
	private _mouseDown: boolean = false;
	private lastMouseX: number;
	private _rotate: Laya.Vector3 = new Laya.Vector3();
	private _autoRotateSpeed: Laya.Vector3 = new Laya.Vector3(0, 0.25, 0);
	model: Laya.Sprite3D;
	constructor(){
		super();

		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, function () {
			this._mouseDown = true;
			this.lastMouseX = Laya.stage.mouseX;
		});
		Laya.stage.on(Laya.Event.MOUSE_UP, this, function () {
			this._mouseDown = false;
		});
	}

	onUpdate() :void {
		if (this._mouseDown) {
			var deltax: number = Laya.MouseManager.instance.mouseX - this.lastMouseX;
			this._rotate.y = deltax * 0.2;
			this.model.transform.rotate(this._rotate, false, false);
			this.lastMouseX = Laya.MouseManager.instance.mouseX;
		}else{
			this.model.transform.rotate(this._autoRotateSpeed, false, false);
		}
	}
}