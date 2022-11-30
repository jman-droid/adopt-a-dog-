const wrapper = document.querySelector('.wrapper');

const title = document.createElement('h1');
title.textContent = 'Adoptadog Blog';

wrapper.appendChild(title);

function renderPost (imageSrc, blogTitle, blogText){

  const blogContainer = document.createElement('article');
  blogContainer.classList.add('blog');

  wrapper.appendChild(blogContainer);

  const image = document.createElement('img');
  image.src = imageSrc;

  blogContainer.appendChild(image);

  const blogContent = document.createElement('div');
  blogContent.classList.add('blog-text');

  blogContainer.appendChild(blogContent);

  const blogTitleElement = document.createElement('h3');
  blogTitleElement.textContent = blogTitle;

  blogContent.appendChild(blogTitleElement);

  const blogTextElement = document.createElement('p');
  blogTextElement.textContent = blogText;

  blogContent.appendChild(blogTextElement);
}

const allBlogPosts = [
  {
    imageSrc: './images/blog-1.jpg',
    blogTitle: 'Traveling With Your Dog',
    blogText: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat'
  },
  {
    imageSrc: './images/blog-2.jpg',
    blogTitle: 'How To Walk Multiple Dogs',
    blogText: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat'
  },
  {
    imageSrc: './images/blog-3.jpg',
    blogTitle: 'Teach Your Dog To Fetch!',
    blogText: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat'
  }

]

allBlogPosts.forEach((post) => {
  renderPost(post.imageSrc, post.blogTitle, post.blogText)
});
