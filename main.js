const obj = document.querySelector('section.object')
const objLone = document.querySelector('section.object-lone')
const objLoneDoc = document.querySelector('section.object-lone-doc')
const exDisseminate = document.querySelector('section.disseminate')
const objLoneCod = document.querySelector('section.object-lone-cod')
const exDiscern = document.querySelector('section.discern')

const objbtn = document.getElementById('btn-object')
const objlnbtn = document.getElementById('btn-object-lone')
const objlndocbtn = document.getElementById('btn-object-lone-doc')
const objlncodbtn = document.getElementById('btn-object-lone-cod')

const objColl = document.querySelector('section.object-collab-doc')
const exEnrich = document.querySelector('section.enrich')
const exAmplify = document.querySelector('section.amplify')

const objcollbtn = document.getElementById('btn-object-collab')
const objcolldocbtn = document.getElementById('btn-object-collab-doc')
const objcollcodbtn = document.getElementById('btn-object-collab-cod')

objbtn.addEventListener('click', function () {
  objLone.classList.toggle('open')
  objbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience').disabled = 'true'
  document.getElementById('btn-object').disabled = 'true'
  document.getElementById('obj-lone').scrollIntoView({ behavior: 'smooth', block: 'beginning' })
})

objlnbtn.addEventListener('click', function () {
  objLoneDoc.classList.toggle('open')
  objlnbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object-collab').disabled = 'true'
  document.getElementById('btn-object-lone').disabled = 'true'
  document.getElementById('object-lone-doc').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

objlndocbtn.addEventListener('click', function () {
  exDisseminate.classList.toggle('open')
  objlndocbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object-lone-cod').disabled = 'true'
  document.getElementById('btn-object-lone-doc').disabled = 'true'
  document.getElementById('disseminate').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

objlncodbtn.addEventListener('click', function () {
  exDiscern.classList.toggle('open')
  objlncodbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object-lone-doc').disabled = 'true'
  document.getElementById('btn-object-lone-cod').disabled = 'true'
  document.getElementById('discern').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

objcollbtn.addEventListener('click', function () {
  objColl.classList.toggle('open')
  objcollbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object-lone').disabled = 'true'
  document.getElementById('btn-object-collab').disabled = 'true'
  document
    .getElementById('object-collab-doc')
    .scrollIntoView({ behavior: 'smooth', block: 'center' })
})

objcolldocbtn.addEventListener('click', function () {
  exEnrich.classList.toggle('open')
  objcolldocbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object-collab-cod').disabled = 'true'
  document.getElementById('btn-object-collab-doc').disabled = 'true'
  document.getElementById('enrich').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

objcollcodbtn.addEventListener('click', function () {
  exAmplify.classList.toggle('open')
  objcollcodbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object-collab-doc').disabled = 'true'
  document.getElementById('btn-object-collab-cod').disabled = 'true'
  document.getElementById('amplify').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

//AUDIENCE FOCUS
const aud = document.querySelector('section.audience')
const audLone = document.querySelector('section.audience-lone')
const audLoneDoc = document.querySelector('section.audience-lone-doc')
const exMediate = document.querySelector('section.mediate')
const audLoneCod = document.querySelector('section.audience-lone-cod')
const exInspire = document.querySelector('section.inspire')

const audbtn = document.getElementById('btn-audience')
const audlnbtn = document.getElementById('btn-audience-lone')
const audlndocbtn = document.getElementById('btn-audience-lone-doc')
const audlncodbtn = document.getElementById('btn-audience-lone-cod')

const audCollDoc = document.querySelector('section.audience-collab-doc')
const exEmpower = document.querySelector('section.empower')
const exAct = document.querySelector('section.act')

const audcollbtn = document.getElementById("btn-audience-collab")
const audcolldocbtn = document.getElementById('btn-audience-collab-doc')
const audcollcodbtn = document.getElementById('btn-audience-collab-cod')

audbtn.addEventListener('click', function () {
  audLone.classList.toggle('open')
  audbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-object').disabled = 'true'
  document.getElementById('btn-audience').disabled = 'true'
  document.getElementById('aud-lone').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

audlnbtn.addEventListener('click', function () {
  audLoneDoc.classList.toggle('open')
  audlnbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience-collab').disabled = 'true'
  document.getElementById('btn-audience-lone').disabled = 'true'
  document.getElementById('aud-lone-doc').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

audlndocbtn.addEventListener('click', function () {
  exMediate.classList.toggle('open')
  audlndocbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience-lone-cod').disabled = 'true'
  document.getElementById('btn-audience-lone-doc').disabled = 'true'
    document.getElementById('mediate').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

audlncodbtn.addEventListener('click', function () {
  exInspire.classList.toggle('open')
  audlncodbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience-lone-doc').disabled = 'true'
  document.getElementById('btn-audience-lone-cod').disabled = 'true'
    document.getElementById('inspire').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

audcollbtn.addEventListener("click", function () {
  audCollDoc.classList.toggle('open')
  audcollbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience-lone').disabled = 'true'
  document.getElementById('btn-audience-collab').disabled = 'true'
  document.getElementById('aud-collab-doc').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

audcolldocbtn.addEventListener('click', function () {
  exEmpower.classList.toggle('open')
  audcolldocbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience-collab-cod').disabled = 'true'
  document.getElementById('btn-audience-collab-doc').disabled = 'true'
    document.getElementById('empower').scrollIntoView({ behavior: 'smooth', block: 'center' })
})

audcollcodbtn.addEventListener('click', function () {
  exAct.classList.toggle('open')
  audcollcodbtn.style.backgroundColor = '#2d9e5f'
  document.getElementById('btn-audience-collab-doc').disabled = 'true'
  document.getElementById('btn-audience-collab-cod').disabled = 'true'
    document.getElementById('act').scrollIntoView({ behavior: 'smooth', block: 'center' })
})


