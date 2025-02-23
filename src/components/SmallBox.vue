<script setup>
import QuoteButton from './QuoteButton.vue'
</script>

<template>
  <div class="cover">
    <div class="boxheadertext">What can we do for you today</div>
    <div class="smallboxbody">
      <a class="smallbox" href="https://portfolio.mutalibb.xyz" target="_blank">
        <div>
          <div class="portfoliotext">See PortFolio</div>
        </div>
      </a>

      <div class="smallbox">
        <div class="smallboxtext">Front End</div>
        <div class="smallboxdescription">
          For a sleek, seamless, and modern website, let me bring your vision to life using the
          latest front-end technologies
        </div>
        <QuoteButton />
      </div>
      <div class="smallbox">
        <div class="smallboxtext">Backend End</div>
        <div class="smallboxdescription">
          For a robust, scalable, and secure backend, let me build the foundation of your
          application using the latest backend technologies.
        </div>
        <QuoteButton />
      </div>
      <div class="smallbox">
        <div class="smallboxtext">Api</div>
        <div class="smallboxdescription">
          Need seamless integration and efficient communication? Let me design and implement
          reliable APIs that connect your application to the world.
        </div>
        <QuoteButton />
      </div>
      <div class="smallbox">
        <div class="smallboxtext">Database</div>
        <div class="smallboxdescription">
          Ensure your data is safe, accessible, and well-organized with a scalable and secure
          database solution tailored to your needs, including full CRUD operations.
        </div>
        <QuoteButton />
      </div>
      <div class="smallbox">
        <div class="smallboxtext">Mobile App</div>
        <div class="smallboxdescription">
          Want a powerful and user-friendly mobile app? Let me create a seamless and engaging
          experience for your users with the latest mobile technologies.
        </div>
        <QuoteButton />
      </div>
      <div class="smallbox">
        <div class="smallboxtext">Web 3</div>
        <div class="smallboxdescription">
          Ready to dive into the decentralized web? Let me help you build secure and scalable Web 3
          applications using the latest blockchain technologies.
        </div>
        <QuoteButton />
      </div>
      <div class="smallbox">
        <div class="smallboxtext">Web hosting</div>
        <div class="smallboxdescription">
          Need reliable and secure web hosting? Let me provide you with a robust hosting solution
          that ensures your website is always up and running smoothly.
        </div>
        <QuoteButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: absolute;
  width: 100%;
  overflow-x: scroll;
  top: 9rem;
}
.smallboxbody {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.smallbox {
  min-width: 21rem;
  width: 21rem;
  height: 15rem;
  background-color: rgb(0, 0, 0);
  margin: 1rem;
  margin-top: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  border-width: 0.1px;
  animation: slideInFromRight 1s ease-out;
  animation-delay: 5s;
  opacity: 0;
  animation-fill-mode: forwards;
}
.smallbox:hover {
  border: 1px solid white;
}
.smallboxtext {
  background: linear-gradient(45deg, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  text-align: center;
}

.portfoliotext {
  background: linear-gradient(10deg, black, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  text-align: center;
  color: white;
}

.cover::-webkit-scrollbar {
  display: none;
}
.smallboxdescription {
  color: white;
  padding: 5px;
  opacity: 0.4;
}
.boxheadertext {
  background: linear-gradient(45deg, white, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  animation: fadeIn 3s ease-in;
  animation-fill-mode: forwards;
  animation-delay: 5s;
  opacity: 0;
}
@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
