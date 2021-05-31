var init = function() {

    var width = 800,
        height = 600;
  
    // レンダラーを作成
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
  
    // シーンを作成
    var scene = new THREE.Scene();
  
    // カメラを作成
  var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);

 // テクスチャー読み込み
 var textureLoader = new THREE.TextureLoader();  
  var texture = textureLoader.load("nuko2.jpg");
  var texture2 = textureLoader.load("kegawa.jpg");
  var mat = new THREE.MeshPhongMaterial();
  mat.map = texture;
  var mat2 = new THREE.MeshPhongMaterial();
  mat2.map = texture2;


  // 箱を作成
 
    
  var geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
  //var material = new THREE.MeshPhongMaterial({ color: 0xffffff });
  //var box = new THREE.Mesh(geometry, material);
  var box = new THREE.Mesh(geometry, mat2);
  box.rotate.x = -40;
  box.position.y = 0.5;
  box.position.x = -0.3;
  scene.add( box );
  
 

 // 球を作成
　var sphereGeometry = new THREE.SphereGeometry( 0.8, 32, 32 ); 
  //半径、垂直方向の分割数、水平方向の分割数
  //var sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true } );
  var sphere = new THREE.Mesh( sphereGeometry, mat );
  sphere.position.set( 0, 0, -5 );
  sphere.rotation.x = 0.2;
  scene.add( sphere );



  // 平行光源
  var directionalLight1 = new THREE.DirectionalLight(0xffffff);
  directionalLight1.position.set(1, 1, 1);
  // シーンに追加
  scene.add(directionalLight1);

  var directionalLight2 = new THREE.DirectionalLight(0xffffff);
  directionalLight2.position.set(-10, 1, 1);
  // シーンに追加
  scene.add(directionalLight2);

 var directionalLight3 = new THREE.DirectionalLight(0xffffff);
  directionalLight3.position.set(1, -10, 1);
  // シーンに追加
  scene.add(directionalLight3);

  // 初回実行
  var update = function() {
    requestAnimationFrame(update);

    // 箱を回転させる
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;

    // 球を回転させる
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
  };
  update();
}
  window.addEventListener('DOMContentLoaded', init);
