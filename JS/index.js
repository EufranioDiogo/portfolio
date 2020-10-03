const headerComponent = {
    template: `
    <div class="header-container">
      <img src="https://avatars3.githubusercontent.com/u/62727833?s=460&u=1c3b3565a90b80442fbb2d0b01f45e816a59ddea&v=4" alt="Man Smiling" class="header-container__profile-picture">
      <div class="header-container__profile-description">
        <div class="header-container__profile-description__top">
          <div class="left-side">
            <h1 class="name">Eufránio Diogo</h1>
            <h2 class="area">Front-end developer</h2>
          </div>
          <div class="rigth-side">
            <ul class="contacts">
              <li><i class="far fa-envelope"></i> eufraniodiogo146@gmail.com</li>
            </ul>
          </div>
        </div>
        <div class="header-container_profile-description__bottom">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vitae nulla iusto dolorum aspernatur sed
            debitis necessitatibus, quis dolorem expedita?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vitae nulla iusto dolorum aspernatur sed
            debitis necessitatibus, quis dolorem expedita?</p>
        </div>
      </div>
    </div>
    `
}

const hobbiesSkillsComponent = {
    template: `
    <aside class="skills">
      <div class="skills__front-end">
        <h2 class="title">Front End</h2>
        <div class="skills__front-end__container">
          <div class="skill-container">
            <h3 class="tech">Vue.js</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>

          <div class="skill-container">
            <h3 class="tech">HTML</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>

          <div class="skill-container">
            <h3 class="tech">CSS</h3>
            <div class="level-bar-place-holder">
              <div class="level-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="hobbies">
        <h2 class="title">Hobbies</h2>

        <div class="hobbies-container">
          <div class="hobbies-container__hobbie-item">
            <img src="IMG/pexels-visionpic-net-344102.jpg" alt="" class="hobbie-img">
            <h4 class="hobbie-name">Talk</h4>
            <p class="hobbie-description">Hoobbie description</p>
          </div>

          <div class="hobbies-container__hobbie-item">
            <img src="IMG/pexels-run-ffwpu-2083500.jpg" alt="" class="hobbie-img">
            <h4 class="hobbie-name">Run</h4>
            <p class="hobbie-description">Hoobbie description</p>
          </div>

          <div class="hobbies-container__hobbie-item">
            <img src="IMG/pexels-ibadah-mimpi-3224344.jpg" alt="" class="hobbie-img">
            <h4 class="hobbie-name">Read</h4>
            <p class="hobbie-description">Hoobbie description</p>
          </div>

        </div>
      </div>
    </aside>
    `
}

const mainContainerComponent = {
    template: `
    <main class="main-container">
      <div class="main-container__blog-last-post">
        <h2 class="title">Blog</h2>
        <div class="blog-last-post__cover">
          <h1 class="post-title">How to organize your CSS</h1>
          <img src="IMG/pexels-neo-2653362.jpg" alt="" class="post-cover-img">
        </div>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nostrum tenetur numquam blanditiis
          suscipit. Doloribus delectus consectetur perspiciatis consequuntur! Accusantium.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nostrum tenetur numquam blanditiis
          suscipit. Doloribus delectus consectetur perspiciatis consequuntur! Accusantium.</p>
        <a href="#">More about</a>
      </div>


      <div class="main-container__experiences">
        <h1>Experiences</h1>

        <div class="experiences__experience">
          <div class="experience__description">
            <h3 class="header-3">Febn 2007 - Current</h3>
            <h2 class="header-2">Front-end developer</h2>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem iste esse magnam! Cupiditate minima
              voluptatem, tempore rerum sunt quos laudantium, quo repellat alias assumenda optio! Omnis iusto possimus
              sunt!</p>
          </div>
        </div>

        <div class="experiences__experience">
          <div class="experience__description">
            <h3 class="header-3">Febn 2007 - Current</h3>
            <h2 class="header-2">Front-end developer</h2>
            <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem iste esse magnam! Cupiditate minima
              voluptatem, tempore rerum sunt quos laudantium, quo repellat alias assumenda optio! Omnis iusto possimus
              sunt!</p>
          </div>
        </div>
      </div>
    </main>
    `
}

const projectControllerComponent = {
    template: `
    <section class="projects-section-controller">
      <h2>Project(3)</h2>
      <div class="project-section-controller__tags-container">
        <button class="btn-tags" :class="{active: tagsToSearch['#Front-end']}" @click="filterSearch('#Front-end')">Front-end</button>
        <button class="btn-tags" :class="{active: tagsToSearch['#Full-Stack']}" @click="filterSearch('#Full-Stack')">Full-Stack</button>
        <button class="btn-tags" :class="{active: tagsToSearch['#Game']}" @click="filterSearch('#Game')">Game</button>
      </div>
    </section>
    `,
    data() {
        return {
            tagsToSearch: { '#Front-end': true, '#Full-Stack': true, '#Game': true }
        }
    },
    methods: {
        filterSearch(key) {
            this.tagsToSearch[key] = !this.tagsToSearch[key]

            console.log(this.tagsToSearch)
            eventBus.$emit('filter', this.tagsToSearch)
        }
    }
}

const projectsShowUpConteinerComponent = {
    props: {
        projects: {
            type: Array,
            required: false
        }
    },
    template: `

    <section class="projects-section-container">
      <div v-for="project in projects" v-if="project.valid" class="project">
        <img :src="project.img" alt="project.name" class="project-img">
        <ul class="tag-list">
          <li v-for="tag in project.tags">{{ tag }}</li>
        </ul>
        <h2 class="project-title">{{ project.name }}</h2>
        <p>{{ project.description }}</p>

        <div class="project-buttons">
          <button class="demo" @click="goTo(project.demoURL)">Demo</button>
          <button class="code" @click="goTo(project.codeURL)">Code</button>
        </div>
      </div>
    </section>
    `,
    data() {
        return {
            tags: { '#Front-end': true, '#Full-Stack': true, '#Game': true }
        }
    }
    ,
    methods: {
        filterProjects(tags) {

        },
        goTo(link) {
            if(link){
                window.location.assign(link)
            }
        }
    },
    mounted() {
        eventBus.$on('filter', (tags) => {
            this.tags = tags
            eventBus.$emit('filter-projects', this.tags)
        })
    }
}

const eventBus = new Vue()

const app = new Vue({
    el: '.profile-container',
    data: {
        projects: [
            {
                img: 'IMG/Countries-Quiz.png',
                name: 'Countries Quiz',
                tags: ['#Game'],
                demoURL: 'https://eufraniodiogo.github.io/Countries-Quiz/',
                codeURL: 'https://github.com/EufranioDiogo/Countries-Quiz',
                description: 'Game that allow the growf of the knowledges about countries, trying to guess questions made there.',
                valid: true
            },
            {
                img: 'IMG/AwesomeQuotes.png',
                name: 'Awesome Quotes',
                tags: ['#Front-end'],
                demoURL: 'https://eufraniodiogo.github.io/AwesomeQuotes/',
                codeURL: 'https://github.com/EufranioDiogo/AwesomeQuotes',
                description: 'Sometimes one I need something to think about and get some motivation I enter at this app, it can help you.',
                valid: true
            },
            {
                img: 'IMG/ImgUploader.png',
                name: 'Img Uploader',
                tags: ['#Full-Stack'],
                demoURL: 'https://secret-waters-42028.herokuapp.com/',
                codeURL: 'https://github.com/EufranioDiogo/ImgUploader',
                description: 'Here you upload your images and get access of it any where you\'re',
                valid: true
            },
        ]
    },
    components: {
        'header-component': headerComponent,
        'hobbies-skills-component': hobbiesSkillsComponent,
        'main-container-component': mainContainerComponent,
        'projects-panel-controller-component': projectControllerComponent,
        'projects-show-up-component': projectsShowUpConteinerComponent
    },
    mounted() {
        eventBus.$on('filter-projects', (tags) => {
            let flag = false


            for (const tag in tags) {
                for (let i = 0; i < this.projects.length; i++) {
                    for (let j = 0; j < this.projects[i].tags.length; j++) {
                        console.log(tag + ' == ' + this.projects[i].tags[j])
                        if (tags[tag] && tag == this.projects[i].tags[j]) {
                            flag = true;
                            this.projects[i].valid = true
                            break
                        } else if (tags[tag] == false && tag == this.projects[i].tags[j]) {
                            this.projects[i].valid = false
                        }
                    }
                }
            }
        })
    }
})