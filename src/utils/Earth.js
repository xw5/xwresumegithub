import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import textureImg from '../assets/earth/world.topo.bathy.200401-mobile.jpg';
import normalImg from '../assets/earth/data-1491837512042-rJlLfXYax.jpg';
import hdrimg from '../assets/earth/mud_road_puresky_2k.hdr';
const CAMERA_TO_MAIN_DIS = 150, MAIN_CONTENT_WIDTH = 150;
/**
  * 计算相机 fov 的函数
  * @param d : 在相机前方 d 距离
  * @param w : 想要看到最大正方形区域边长为 w
  * @param r : 屏幕宽高比
  */
function calcFov(d, w, r) {
  var f;
  var vertical = w;
  if (r < 1) {
      vertical = vertical/r;
  }
  f = Math.atan(vertical/d/2)*2 * (180 / Math.PI);
  return f;
}

class Earth {
  constructor(container) {
    this.container = container;
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.scene = null;
    this.camera = null;
    this.earth = null;
    this.loader = null;
    this.radius = 36;
    this.controls = null;
    this.init();
  }

  init() {
    this.initScene();

    this.initCamera();

    this.initRender();

    this.initLight();

    this.initMesh();

    this.initControl();

    this.rendererFn();
    
    this.resizeFix();

    this.initHdr();
  }

  async initMesh() {
    this.loader = new THREE.TextureLoader();
    const textrureMap = await this.loader.load(textureImg);
    const normalImgMap = await this.loader.load(normalImg);
    // console.log('---- this.loader.load ----:', textrureMap);
    var globeGgeometry = new THREE.SphereGeometry( this.radius, 100, 100 );
    var globeMaterial = new THREE.MeshStandardMaterial({ 
      map: textrureMap,
      metalnessMap: normalImgMap,
      // metalness: .8,
      roughness: .5,
     } );
    // var globeMaterial = new THREE.MeshPhongMaterial({ 
    //   map: textrureMap
    //  });
    this.earth = new THREE.Mesh( globeGgeometry, globeMaterial );
    this.scene.add( this.earth );
  }

  initHdr() {
    const _this = this;
    new RGBELoader()
    .load(hdrimg, function (envMap) {
        envMap.mapping = THREE.EquirectangularReflectionMapping;
        // _this.scene.environment = envMap; // 给场景添加环境光效果
        _this.scene.background = envMap; // 给场景添加背景图
    });
  }

  // 初始化场景
  initScene() {
    this.scene = new THREE.Scene();
    // this.scene.background = new THREE.Color( 0x020924 );
		// this.scene.fog = new THREE.Fog( 0x000000, 100, 180 );
  }

  // 初始化相机
  initCamera() {
    this.camera = new THREE.PerspectiveCamera( calcFov(CAMERA_TO_MAIN_DIS, MAIN_CONTENT_WIDTH, this.w / this.h), this.w / this.h, 5, 1000 );
		this.camera.position.set( 0, 0, 100 );
		this.camera.lookAt( 0, 0, 0 );
    // const helper = new THREE.CameraHelper( this.camera );
    // this.scene.add( helper );
  }

  // 初始化渲染器 
  initRender() {
    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( this.w, this.h );
		this.container.appendChild( this.renderer.domElement );
  }

  // 初始化灯光
  initLight() {
    const ambientLight = new THREE.AmbientLight( 0xffffff, 1.5 );
		this.scene.add( ambientLight );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
		directionalLight.position.set( 1, 0.1, 0 ).normalize();
		var directionalLight2 = new THREE.DirectionalLight( 0xff2ffff, 0.5 );
		directionalLight2.position.set( 1, 0.1, 0.1 ).normalize();
		this.scene.add( directionalLight );
		this.scene.add( directionalLight2 );
		var hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 0.2 );
		hemiLight.position.set( 0, 1, 0 );
		this.scene.add( hemiLight );
		var directionalLight = new THREE.DirectionalLight( 0xffffff, .5 );
		directionalLight.position.set( 1, 500, - 20 );
		// directionalLight.castShadow = true;
		// directionalLight.shadow.camera.top = 18;
		// directionalLight.shadow.camera.bottom = - 10;
		// directionalLight.shadow.camera.left = - 52;
		// directionalLight.shadow.camera.right = 12;
    // directionalLight.shadow.camera.far = 100
		this.scene.add(directionalLight);
  }

  initControl() {
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
		this.controls.enableDamping = true;
		this.controls.enableZoom = true;
		this.controls.autoRotate = false;
		this.controls.autoRotateSpeed = 2;
		this.controls.enablePan = true;
  }

  // 执行渲染
  rendererFn() {
    this.controls.update();
    if (this.earth) {
      this.earth.rotateY(0.001); 
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.rendererFn.bind(this));
  }

  resizeFix() {
    window.addEventListener('resize', () => {
      this.w = window.innerWidth;
      this.h = window.innerHeight;
      console.log('---- resize ----:', this.w, this.h);
      this.camera.fov = calcFov(CAMERA_TO_MAIN_DIS, MAIN_CONTENT_WIDTH, this.w / this.h);
      this.camera.aspect = this.w / this.h;
      this.camera.updateProjectionMatrix();
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize( this.w, this.h );
    }, false);
  }
}

export default Earth;