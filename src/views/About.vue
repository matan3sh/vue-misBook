<template>
  <section class="about">
    <div class="about-wrapper">
      <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQG5p2qiT7jtGQ/profile-displayphoto-shrink_400_400/0?e=1598486400&v=beta&t=D0IubSmpXnjWlTlhkgXiwYuYVjI2I2jN156Uxmg9_5o"
        alt=""
      />
      <div>
        <p>
          This is home assignment by
          <a href="https://www.coding-academy.org/" target="_blank"
            >#Coding Academy</a
          >
        </p>
        <p class="by">Developed By @Matan Shaviro</p>
        <div class="social-icons">
          <a
            href="https://www.linkedin.com/in/matan-shaviro-990b0272/"
            target="_blank"
            ><i class="fab fa-linkedin fa-2x"></i
          ></a>
          <a href="https://github.com/matan3sh/vue-misBook" target="_blank"
            ><i class="fab fa-github-square fa-2x"></i
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.about {
  display: flex;
  justify-content: center;
  text-align: left;
  margin: 5rem auto;
}
.about-wrapper {
  display: flex;
}

.about-wrapper img {
  flex: 2;
  width: 80px;
}

.about-wrapper p {
  flex: 6;
  margin: 0 1rem;
}

.about-wrapper a {
  font-weight: 900;
}

.by {
  text-transform: uppercase;
  font-size: 0.8rem;
}

.social-icons i {
  margin: 0.5rem 1rem;
}

@media (max-width: 500px) {
  .about-wrapper img {
    width: 40px;
    height: 40px;
  }

  .about-wrapper p {
    font-size: 0.8rem;
    margin: 0 1rem;
  }
}

@media (max-width: 500px) {
  .about-wrapper img {
    margin-left: 1rem;
  }

  .about-wrapper p {
    font-size: 0.7rem;
    margin: 0 1rem;
  }
}
</style>
