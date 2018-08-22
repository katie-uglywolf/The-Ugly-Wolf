const INSTA_API_PATH = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='
const AT = '7715599892.7be323c.b948c81c645c4985b4e83c3f69a98187'

const addImageFromPost = (post) => {
  const aTag = document.createElement('a')
  aTag.href = post.link
  aTag.target = '_blank'
  const imgTag = document.createElement('img')
  aTag.appendChild(imgTag);
  imgTag.src = post.images.standard_resolution.url
  imgTag.className = "ig_photo"
  document.getElementById('ig_container').appendChild(aTag)
}
document.addEventListener("DOMContentLoaded", (e) => {
  fetch(`${INSTA_API_PATH}${AT}`)
    .then(response => response.json())
    .then(({data}) => {
      const firstThree = data.slice(0,3)
      const imgs = firstThree.forEach(addImageFromPost)
    })
});