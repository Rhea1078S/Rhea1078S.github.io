window.addEventListener('load', init);

var init = function() {

	var width = 1000, height = 800;

	const renderer = new THREE.WebGLRenderer({
          canvas: document.querySelector('#myCanvas')
        });
	renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    renderer.shadowMap.enabled = true;

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
	
	camera.position.set(0, 0, 1000);
	const controls = new THREE.OrbitControls(camera,document.body);
	
	var textureLoader = new THREE.TextureLoader();  
        var texture = textureLoader.load("/earth.png");
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

    var sungeometry = new THREE.SphereGeometry( 10, 16, 16 );
    var sunmaterial = new THREE.MeshBasicMaterial( {color: 0xff6600} );
    var sun = new THREE.Mesh( sungeometry, sunmaterial );
    sun.position.set(0,0,0);
    scene.add(sun);

    var sungeometry2 = new THREE.SphereGeometry( 10.3, 16, 16 );
    var sunmaterial2 = new THREE.MeshBasicMaterial( {color: 0xff0000, wireframe: true} );
    var sun2 = new THREE.Mesh( sungeometry2, sunmaterial2 );
    sun2.position.set(0,0,0);
    scene.add(sun2);

    var prominencegeometry = new THREE.TorusKnotGeometry( 8, 0.3, 20, 2, 2, 3 ); 
    var prominencematerial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    var prominence = new THREE.Mesh( prominencegeometry, prominencematerial );
    prominence.position.set(0,0,0);
    scene.add(prominence);

   
    var prominence2 = new THREE.Mesh( prominencegeometry, prominencematerial );
    prominence2.position.set(0,0,0);
    scene.add(prominence2);


    var earthgeometry = new THREE.SphereGeometry( 3, 16, 16 );
    var earthmaterial = new THREE.MeshStandardMaterial( {color: 0x00ffff} );
    var earth = new THREE.Mesh( earthgeometry, earthmaterial );
    earth.castShadow = true;
    earth.receiveShadow = true;
    earth.position.set(0,0,40);

    const orbit = new THREE.Group()
    orbit.add(earth);
    orbit.position.set(0,0,0);
    scene.add(orbit);

    var vinusgeometry = new THREE.SphereGeometry( 1.5, 16, 16 );
    var vinusmaterial = new THREE.MeshLambertMaterial( {color: 0xdddddd} );
    var vinus = new THREE.Mesh( vinusgeometry, vinusmaterial );
    vinus.castShadow = true; 
    vinus.position.set(23,0,0);

    const orbit2 = new THREE.Group()
    orbit2.add(vinus);
    orbit2.position.set(0,0,0);
    scene.add(orbit2);

    const light = new THREE.PointLight(0xFFFFFF, 2, 50, 0.2);
    light.position.set(0, 0, 0);
    light.castShadow = true;
    scene.add(light);

    camera.position.z = 80;
    camera.position.y = 10;
    camera.rotation.x = -0.15;
	
	tick();
        // 毎フレーム時に実行されるループイベントです
        function tick() {
          // レンダリング
          renderer.render(scene, camera);
          requestAnimationFrame(tick);
        }
  
    var update = function() {
        requestAnimationFrame(update);
  
        renderer.render(scene, camera);

        orbit.rotation.y += 0.01;
        orbit2.rotation.y += 0.018;
        prominence.rotation.x += 0.1;
        prominence.rotation.y += 0.09;
        prominence2.rotation.y += 0.1;
        prominence2.rotation.z += 0.08;
        sun2.rotation.x += 1;
        sun2.rotation.y += 1;
        sun2.rotation.z += 1;
    };
    update();
}
window.addEventListener('DOMContentLoaded', init);
