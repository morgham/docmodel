//Renderer, Scene, and Camera
const scene = new THREE.Scene()
const renderer = new THREE.WebGLRenderer({
  antialias: true,
})
renderer.setSize(innerWidth, innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0xefefef, 1)

//ATTACH RENDERER TO PAGE
//ATTACH RENDERER TO PAGE
const sectionTag = document.querySelector('section')
sectionTag.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1000)
camera.position.set(300, 120, 400)
camera.lookAt(0, 0, 0)

//ORBIT CONTROLS
//ORBIT CONTROLS
const controls = new THREE.OrbitControls(camera, renderer.domElement)

//LIGHTING
//LIGHTING
const ambientLight = new THREE.AmbientLight(0xffffff)
ambientLight.intensity = 0.75
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xcccccc, 1)
directionalLight.position.set(100, 200, 300)
scene.add(directionalLight)

//CUBE MODEL
//CUBE MODEL
const makeCube = function (color) {
  const geometry = new THREE.BoxGeometry(100, 100, 100)
  const material = new THREE.MeshLambertMaterial({
    color: color,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.castShadow = true

  scene.add(mesh)
  return mesh
}

const cube1 = makeCube(0xbf216b)
cube1.translateX(-60)
cube1.translateY(60)
cube1.translateZ(60)
const cube2 = makeCube(0x2d9e5f)
cube2.translateX(60)
cube2.translateY(60)
cube2.translateZ(60)
const cube3 = makeCube(0xbf216b)
cube3.translateX(-60)
cube3.translateY(-60)
cube3.translateZ(60)
const cube4 = makeCube(0xbf216b)
cube4.translateX(60)
cube4.translateY(-60)
cube4.translateZ(60)
const cube5 = makeCube(0xbf216b)
cube5.translateX(60)
cube5.translateY(-60)
cube5.translateZ(-60)
const cube6 = makeCube(0xbf216b)
cube6.translateX(60)
cube6.translateY(60)
cube6.translateZ(-60)
const cube7 = makeCube(0xbf216b)
cube7.translateX(-60)
cube7.translateY(-60)
cube7.translateZ(-60)
const cube8 = makeCube(0xbf216b)
cube8.translateX(-60)
cube8.translateY(60)
cube8.translateZ(-60)

//0x2d9e5f

const cubeGroup = new THREE.Group()
cubeGroup.add(cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8)
cubeGroup.castShadow = true
scene.add(cubeGroup)

//AXES
//AXES
const makeLine = function () {
  const material = new THREE.LineBasicMaterial({
    color: 0x47353a,
  })
  const points = []
  points.push(new THREE.Vector3(-200, 0, 0))
  points.push(new THREE.Vector3(0, 0, 0))
  points.push(new THREE.Vector3(200, 0, 0))

  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const line = new THREE.Line(geometry, material)

  scene.add(line)
  return line
}

const line1 = makeLine()
const line2 = makeLine()
line2.rotation.y = Math.PI / 2
const line3 = makeLine()
line3.rotation.z = Math.PI / 2

//TEXT PIECES https://www.youtube.com/watch?v=IA3HjAV2nzU
//TEXT PIECES https://www.youtube.com/watch?v=IA3HjAV2nzU
const loader = new THREE.FontLoader()
loader.load('futura.json', function (font) {
  const object = new THREE.TextGeometry('Object', {
    font: font,
    size: 12,
    height: 2,
  })
  const textMesh = new THREE.Mesh(object, [
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
  ])
  textMesh.translateX(-265)
  textMesh.translateY(-5)
  scene.add(textMesh)
  return textMesh
})

loader.load('futura.json', function (font) {
  const audience = new THREE.TextGeometry('Audience', {
    font: font,
    size: 12,
    height: 2,
  })
  const textMesh = new THREE.Mesh(audience, [
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
  ])
  textMesh.translateX(210)
  textMesh.translateY(-5)
  scene.add(textMesh)
  return textMesh
})

loader.load('futura.json', function (font) {
  const loneCreative = new THREE.TextGeometry('Lone Creative', {
    font: font,
    size: 12,
    height: 2,
  })
  const textMesh = new THREE.Mesh(loneCreative, [
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
  ])
  textMesh.translateY(-220)
  textMesh.translateX(-50)
  scene.add(textMesh)
  return textMesh
})

loader.load('futura.json', function (font) {
  const collaborative = new THREE.TextGeometry('Collaborative', {
    font: font,
    size: 12,
    height: 2,
  })
  const textMesh = new THREE.Mesh(collaborative, [
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
  ])
  textMesh.translateY(208)
  textMesh.translateX(-50)
  scene.add(textMesh)
  return textMesh
})

loader.load('futura.json', function (font) {
  const demofCulture = new THREE.TextGeometry('Democratization \nof Culture', {
    font: font,
    size: 12,
    height: 2,
  })
  const textMesh = new THREE.Mesh(demofCulture, [
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
  ])
  textMesh.translateY(5)
  textMesh.translateZ(-210)
  textMesh.rotation.y = Math.PI / 2
  scene.add(textMesh)
  return textMesh
})

loader.load('futura.json', function (font) {
  const culturaldem = new THREE.TextGeometry('Cultural \nDemocracy', {
    font: font,
    size: 12,
    height: 2,
  })
  const textMesh = new THREE.Mesh(culturaldem, [
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
    new THREE.MeshPhongMaterial({ color: 0x47353a }),
  ])
  textMesh.translateY(0)
  textMesh.translateZ(300)
  textMesh.rotation.y = Math.PI / 2
  scene.add(textMesh)
  return textMesh
})

const diss = document.querySelector('#exdisseminate')
const discern = document.querySelector('#exdiscern')
const enrich = document.querySelector('#exenrich')
const amplify = document.querySelector('#examplify')
const mediate = document.querySelector('#exmediate')
const inspire = document.querySelector('#exinspire')
const empower = document.querySelector('#exempower')
const act = document.querySelector('#exact')

const exTitle = document.querySelector("#ex-title")
const exEquation = document.querySelector("#ex-equation")
const paragraph = document.querySelector("#ex-content")
const chap2 = document.querySelector("#ex-chap2")
const chap3 = document.querySelector("#ex-chap3")
const chap4 = document.querySelector("#ex-chap4")

diss.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that disseminate";
  exEquation.innerHTML = "Object (x) + Lone Creative (y) + Democratization of Culture (z) = <b>Disseminate</b>";
  paragraph.innerHTML = "<b>Chapter 10:</b> Traditional Practice That Disseminates: <i>Native Brazil/Alien Brazil</i> by Anna Bella Geiger, Peter Aerts, and Aline Van Nereuax";
  chap2.innerHTML = "<b>Chapter 11:</b><i>Something's Off</i>: Reconsidering Traditional Practice by Michelle Sunset";

  
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube7.material = material
    cube1.material = changeMaterial
    cube2.material = changeMaterial
    cube3.material = changeMaterial
    cube4.material = changeMaterial
    cube5.material = changeMaterial
    cube6.material = changeMaterial
    cube8.material = changeMaterial

  camera.position.set(-300, -120, -400)  

  event.preventDefault()
})

discern.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that disern"
  exEquation.innerHTML = "Object (x) + Lone Creative (y) + Cultural Democracy (z) = <b>Discern</b>"
  paragraph.innerHTML = "<b>Chapter 12:</b> Discerning the Cryosphere: Humans and Climate Art from the Fances Lehman Loeb Art Center, Vassar College, by Elizabeth Nogrady"
  chap2.innerHTML = "<b>Chapter 13:</b> Discerning with a Good Voice: <i>H&#243;wa&#353;te at the Heritage Center</i> by Ashley Pourier and Audrey Jacobs";


 const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube3.material = material
    cube1.material = changeMaterial
    cube2.material = changeMaterial
    cube4.material = changeMaterial
    cube5.material = changeMaterial
    cube6.material = changeMaterial
    cube7.material = changeMaterial
    cube8.material = changeMaterial

    camera.position.set(-300, -120, 400)  

  event.preventDefault()
})

enrich.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that enrich"
  exEquation.innerHTML = "Object (x) + Collaborative (y) + Democratization of Culture (z) = <b>Enrich</b>"
  paragraph.innerHTML = "<b>Chapter 14:</b> Not Just Dissemination, an Enriched Experience: <i>Ming Dynasty Costume</i> Exhibition, by Xiaonan Jiang and Xuejing Dai"
  chap2.innerHTML = "<b>Chapter 15:</b> <i>SKIN</i>, a Multisensory Art Exhibition for Children Aged Eight and Older and Their Families, by Stefanie Metsemakers and Gerd Dierckx";

  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube8.material = material
    cube1.material = changeMaterial
    cube2.material = changeMaterial
    cube3.material = changeMaterial
    cube4.material = changeMaterial
    cube5.material = changeMaterial
    cube6.material = changeMaterial
    cube7.material = changeMaterial

    camera.position.set(-300, 120, -400)  

  event.preventDefault()
})

amplify.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that amplify"
  exEquation.innerHTML = "Object (x) + Collaborative (y) + Cultural Democracy (z) = <b>Amplify</b>"
  paragraph.innerHTML = "<b>Chapter 16:</b> Challenging Romaphobia: The Case of a Romanian Carnival MAsk at Mucem, by Julia Ferloni and Emilie Sitzia"
  chap2.innerHTML = "<b>Chapter 17:</b> <i>Lock & Key Creative Expression Lab:</i>, A Curated Space During the Pandemic, by Ashley Hartman, Melanie Rosato, and Nacy Azria";

    const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube1.material = material
    cube2.material = changeMaterial
    cube3.material = changeMaterial
    cube4.material = changeMaterial
    cube5.material = changeMaterial
    cube6.material = changeMaterial
    cube7.material = changeMaterial
    cube8.material = changeMaterial

    camera.position.set(-300, 120, 400) 

  event.preventDefault()
})

mediate.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that mediate"
  exEquation.innerHTML = "Audience (x) + Lone Creative (y) + Democratization of Culture (z) = <b>Mediate</b>"
  paragraph.innerHTML = "<b>Chapter 18:</b> <i>The Same Four Walls:</i>Inspiration and Reflection During a Global Pandemic, by Lesley Marchessault"
  chap2.innerHTML = "<b>Chapter 19:</b> SCREEN IT: A Mediation-Driven Approach to Art, Technology, and Audiences, by Pieter Jan Valgaeren";
  
    const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube5.material = material
    cube1.material = changeMaterial
    cube2.material = changeMaterial
    cube3.material = changeMaterial
    cube4.material = changeMaterial
    cube6.material = changeMaterial
    cube7.material = changeMaterial
    cube8.material = changeMaterial

    camera.position.set(300, -120, -400) 

  event.preventDefault()

})

inspire.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that inspire"
  exEquation.innerHTML = "Audience (x) + Lone Creatie (y) + Cultural Democracy (z) = <b>Inspire</b>"
  paragraph.innerHTML = "<b>Chapter 20:</b> <i>The Boneyard:</i> Inspiring Through In-Gallery Artist Demonstrations"
  chap2.innerHTML = "<b>Chapter 21:</b> <i>There Is No Planet B!</i> An Audience Participation Project Meant to Inspire, by Aline Van Nereaux";

    const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube4.material = material
    cube1.material = changeMaterial
    cube2.material = changeMaterial
    cube3.material = changeMaterial
    cube5.material = changeMaterial
    cube6.material = changeMaterial
    cube7.material = changeMaterial
    cube8.material = changeMaterial

    camera.position.set(300, -120, 400) 

  event.preventDefault()

})

empower.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that empower"
  exEquation.innerHTML = "Audience (x) + Collaborative (y) + Democratization of Culture (z) = <b>Empower</b>"
  paragraph.innerHTML = "<b>Chapter 22:</b>  EmPOWER: Learning from Our Youngest Community Members at the Clyfford Still Museum, by Nicole Cromartie and Bailey H. Placzek"
  chap2.innerHTML = "<b>Chapter 23:</b> <i>Anybody Home?</i> by Roselyne Francken and Tammy Wille";

    const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube6.material = material
    cube1.material = changeMaterial
    cube2.material = changeMaterial
    cube3.material = changeMaterial
    cube4.material = changeMaterial
    cube5.material = changeMaterial
    cube7.material = changeMaterial
    cube8.material = changeMaterial

    camera.position.set(300, 120, -400) 

  event.preventDefault()
})

act.addEventListener('click', function (event) {
  exTitle.innerHTML = "Exhibitions that act"
  exEquation.innerHTML = "Audience (x) + Collaborative (y) + Cultural Democracy (z) = <b>Act</b>"
  paragraph.innerHTML = "<b>Chapter 24:</b> Collaborative Reach of a Site-Specific Exhibition That Addresses School Segregation, by Katie Fuller and Patricia O'Rourke"
  chap2.innerHTML = "<b>Chapter 25:</b> <i>Boundless Hospitality:</i> M from a Different Perspective, by Sofie Vermeiren";

    const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0x2d9e5f)
  })
    const changeMaterial = new THREE.MeshLambertMaterial({
    color: new THREE.Color(0xbf216b)
  })

    cube2.material = material
    cube1.material = changeMaterial
    cube3.material = changeMaterial
    cube4.material = changeMaterial
    cube5.material = changeMaterial
    cube6.material = changeMaterial
    cube7.material = changeMaterial
    cube8.material = changeMaterial

    camera.position.set(300, 120, 400) 

  event.preventDefault()

})



//ANIMATION
//ANIMATION
const animate = function () {
  controls.update()
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
  requestAnimationFrame(animate)
}

animate()

//EVENTLISTENERS
//EVENTLISTENERS
//Create mousemove listener
document.addEventListener('mousemove', function (event) {
  cameraAimX = window.innerWidth / 2 - event.pageX
  cameraAimY = window.innerHeight / 2 - event.pageY
  //Tweak the position of the mouse movement for looking

})

document.addEventListener("wheel", function (event) {
  cameraAimZ = cameraAimZ + event.deltaY
  // cameraAimZ = Math.max(-900, cameraAimZ)
  // cameraAimZ = Math.min(-200, cameraAimZ)
  event.preventDefault()
})

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})