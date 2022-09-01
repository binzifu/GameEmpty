import { CameraMove } from '../runtimeui/CameraMove';
export default class GameScene extends Laya.Script {
    
    private m_scene: Laya.Scene3D;
    constructor() { 
        super();
        Laya3D.init(0, 0);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.Stat.show();
    }

    onAwake(): void {
       
        this.onCreateScene();
        // this.onCreateScene3D();
    }

    private onCreateScene3D(){
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

        // //设置场景雾化
        // scene.enableFog = true;
        // //雾化颜色
        // scene.fogColor = new Laya.Vector3(250, 0, 0);
        // //雾化起始位置, 相对于相机的距离
        // scene.fogStart = 2;
        // //雾化最浓处的距离
        // scene.fogRange = 60;

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
}