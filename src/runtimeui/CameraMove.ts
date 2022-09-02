export class CameraMove extends Laya.Script3D {
    /** @private */
    protected isMouseDown: boolean;
    protected isLastMouseX: number;
    protected isLastMouseY: number;
    protected camera: Laya.Camera;
    protected rotaionSpeed: number = 0.00006;

    protected _tempVector3: Laya.Vector3 = new Laya.Vector3();
    protected yawPitchRoll: Laya.Vector3 = new Laya.Vector3();
	protected resultRotation: Laya.Quaternion = new Laya.Quaternion();
	protected tempRotationZ: Laya.Quaternion = new Laya.Quaternion();
	protected tempRotationX: Laya.Quaternion = new Laya.Quaternion();
	protected tempRotationY: Laya.Quaternion = new Laya.Quaternion();
    speed: number = 0.01;
    constructor () {
        super();
    }

    onAwake(): void {
        this.camera = <Laya.Camera>this.owner;
        // Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.Clickmouse);
        Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseRDown);
        Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseRUp);
    }

    // private Clickmouse() {
    //     console.log("======");
        
    // }

    onDestroy(): void {
        Laya.stage.on(Laya.Event.RIGHT_MOUSE_DOWN, this, this.mouseRDown);
        Laya.stage.on(Laya.Event.RIGHT_MOUSE_UP, this, this.mouseRUp);
    }

    protected _updateRotation(): void {
		if (Math.abs(this.yawPitchRoll.y) < 1.50) {
			Laya.Quaternion.createFromYawPitchRoll(this.yawPitchRoll.x, this.yawPitchRoll.y, this.yawPitchRoll.z, this.tempRotationZ);
			this.tempRotationZ.cloneTo(this.camera.transform.localRotation);
			this.camera.transform.localRotation = this.camera.transform.localRotation;
		}
	}

    onUpdate(): void {
        var elapsedTime: number = Laya.timer.delta;
        if (!isNaN(this.isLastMouseX) && !isNaN(this.isLastMouseY) && this.isMouseDown) {
            var scene: Laya.Scene3D = this.owner.scene;
            Laya.KeyBoardManager.hasKeyDown(87) && this.moveForward(-this.speed * elapsedTime);//W
			Laya.KeyBoardManager.hasKeyDown(83) && this.moveForward(this.speed * elapsedTime);//S
			Laya.KeyBoardManager.hasKeyDown(65) && this.moveRight(-this.speed * elapsedTime);//A
			Laya.KeyBoardManager.hasKeyDown(68) && this.moveRight(this.speed * elapsedTime);//D
			Laya.KeyBoardManager.hasKeyDown(81) && this.moveVertical(this.speed * elapsedTime);//Q
			Laya.KeyBoardManager.hasKeyDown(69) && this.moveVertical(-this.speed * elapsedTime);//E

            var offsetX: number = Laya.stage.mouseX - this.isLastMouseX;
            var offsetY: number = Laya.stage.mouseY - this.isLastMouseY;
            var yprElem: Laya.Vector3 = this.yawPitchRoll;
			yprElem.x -= offsetX * this.rotaionSpeed * elapsedTime;
			yprElem.y -= offsetY * this.rotaionSpeed * elapsedTime;
			this._updateRotation();
        }
        this.isLastMouseX = Laya.stage.mouseX;
		this.isLastMouseY = Laya.stage.mouseY;
    }

    protected mouseRDown() {
        console.log("--====++++");
        
        this.isLastMouseX = Laya.stage.mouseX;
        this.isLastMouseY = Laya.stage.mouseY;
        this.isMouseDown = true;
    }

    protected mouseRUp() {
        this.isMouseDown = false;
    }

    /**
	 * 向前移动。
	 * @param distance 移动距离。
	 */
	moveForward(distance: number): void {
		this._tempVector3.x = this._tempVector3.y = 0;
		this._tempVector3.z = distance;
		this.camera.transform.translate(this._tempVector3);
	}

	/**
	 * 向右移动。
	 * @param distance 移动距离。
	 */
	moveRight(distance: number): void {
		this._tempVector3.y = this._tempVector3.z = 0;
		this._tempVector3.x = distance;
		this.camera.transform.translate(this._tempVector3);
	}

	/**
	 * 向上移动。
	 * @param distance 移动距离。
	 */
	moveVertical(distance: number): void {
		this._tempVector3.x = this._tempVector3.z = 0;
		this._tempVector3.y = distance;
		this.camera.transform.translate(this._tempVector3, false);
	}
}