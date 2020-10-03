"use strict";

var headerComponent = {
  template: "\n    <div class=\"header-container\">\n      <img src=\"https://avatars3.githubusercontent.com/u/62727833?s=460&u=1c3b3565a90b80442fbb2d0b01f45e816a59ddea&v=4\" alt=\"Man Smiling\" class=\"header-container__profile-picture\">\n      <div class=\"header-container__profile-description\">\n        <div class=\"header-container__profile-description__top\">\n          <div class=\"left-side\">\n            <h1 class=\"name\">Eufr\xE1nio Diogo</h1>\n            <h2 class=\"area\">Front-end developer</h2>\n          </div>\n          <div class=\"rigth-side\">\n            <ul class=\"contacts\">\n              <li><i class=\"far fa-envelope\"></i> eufraniodiogo146@gmail.com</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"header-container_profile-description__bottom\">\n          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vitae nulla iusto dolorum aspernatur sed\n            debitis necessitatibus, quis dolorem expedita?</p>\n          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam vitae nulla iusto dolorum aspernatur sed\n            debitis necessitatibus, quis dolorem expedita?</p>\n        </div>\n      </div>\n    </div>\n    "
};
var hobbiesSkillsComponent = {
  template: "\n    <aside class=\"skills\">\n      <div class=\"skills__front-end\">\n        <h2 class=\"title\">Front End</h2>\n        <div class=\"skills__front-end__container\">\n          <div class=\"skill-container\">\n            <h3 class=\"tech\">Vue.js</h3>\n            <div class=\"level-bar-place-holder\">\n              <div class=\"level-bar\"></div>\n            </div>\n          </div>\n\n          <div class=\"skill-container\">\n            <h3 class=\"tech\">HTML</h3>\n            <div class=\"level-bar-place-holder\">\n              <div class=\"level-bar\"></div>\n            </div>\n          </div>\n\n          <div class=\"skill-container\">\n            <h3 class=\"tech\">CSS</h3>\n            <div class=\"level-bar-place-holder\">\n              <div class=\"level-bar\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"hobbies\">\n        <h2 class=\"title\">Hobbies</h2>\n\n        <div class=\"hobbies-container\">\n          <div class=\"hobbies-container__hobbie-item\">\n            <img src=\"IMG/pexels-visionpic-net-344102.jpg\" alt=\"\" class=\"hobbie-img\">\n            <h4 class=\"hobbie-name\">Talk</h4>\n            <p class=\"hobbie-description\">Hoobbie description</p>\n          </div>\n\n          <div class=\"hobbies-container__hobbie-item\">\n            <img src=\"IMG/pexels-run-ffwpu-2083500.jpg\" alt=\"\" class=\"hobbie-img\">\n            <h4 class=\"hobbie-name\">Run</h4>\n            <p class=\"hobbie-description\">Hoobbie description</p>\n          </div>\n\n          <div class=\"hobbies-container__hobbie-item\">\n            <img src=\"IMG/pexels-ibadah-mimpi-3224344.jpg\" alt=\"\" class=\"hobbie-img\">\n            <h4 class=\"hobbie-name\">Read</h4>\n            <p class=\"hobbie-description\">Hoobbie description</p>\n          </div>\n\n        </div>\n      </div>\n    </aside>\n    "
};
var mainContainerComponent = {
  template: "\n    <main class=\"main-container\">\n      <div class=\"main-container__blog-last-post\">\n        <h2 class=\"title\">Blog</h2>\n        <div class=\"blog-last-post__cover\">\n          <h1 class=\"post-title\">How to organize your CSS</h1>\n          <img src=\"IMG/pexels-neo-2653362.jpg\" alt=\"\" class=\"post-cover-img\">\n        </div>\n\n        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nostrum tenetur numquam blanditiis\n          suscipit. Doloribus delectus consectetur perspiciatis consequuntur! Accusantium.</p>\n        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nostrum tenetur numquam blanditiis\n          suscipit. Doloribus delectus consectetur perspiciatis consequuntur! Accusantium.</p>\n        <a href=\"#\">More about</a>\n      </div>\n\n\n      <div class=\"main-container__experiences\">\n        <h1>Experiences</h1>\n\n        <div class=\"experiences__experience\">\n          <div class=\"experience__description\">\n            <h3 class=\"header-3\">Febn 2007 - Current</h3>\n            <h2 class=\"header-2\">Front-end developer</h2>\n            <p class=\"paragraph\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem iste esse magnam! Cupiditate minima\n              voluptatem, tempore rerum sunt quos laudantium, quo repellat alias assumenda optio! Omnis iusto possimus\n              sunt!</p>\n          </div>\n        </div>\n\n        <div class=\"experiences__experience\">\n          <div class=\"experience__description\">\n            <h3 class=\"header-3\">Febn 2007 - Current</h3>\n            <h2 class=\"header-2\">Front-end developer</h2>\n            <p class=\"paragraph\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolorem iste esse magnam! Cupiditate minima\n              voluptatem, tempore rerum sunt quos laudantium, quo repellat alias assumenda optio! Omnis iusto possimus\n              sunt!</p>\n          </div>\n        </div>\n      </div>\n    </main>\n    "
};
var projectControllerComponent = {
  template: "\n    <section class=\"projects-section-controller\">\n      <h2>Project(3)</h2>\n      <div class=\"project-section-controller__tags-container\">\n        <button class=\"btn-tags\" :class=\"{active: tagsToSearch['#Front-end']}\" @click=\"filterSearch('#Front-end')\">Front-end</button>\n        <button class=\"btn-tags\" :class=\"{active: tagsToSearch['#Full-Stack']}\" @click=\"filterSearch('#Full-Stack')\">Full-Stack</button>\n        <button class=\"btn-tags\" :class=\"{active: tagsToSearch['#Game']}\" @click=\"filterSearch('#Game')\">Game</button>\n      </div>\n    </section>\n    ",
  data: function data() {
    return {
      tagsToSearch: {
        '#Front-end': true,
        '#Full-Stack': true,
        '#Game': true
      }
    };
  },
  methods: {
    filterSearch: function filterSearch(key) {
      this.tagsToSearch[key] = !this.tagsToSearch[key];
      console.log(this.tagsToSearch);
      eventBus.$emit('filter', this.tagsToSearch);
    }
  }
};
var projectsShowUpConteinerComponent = {
  props: {
    projects: {
      type: Array,
      required: false
    }
  },
  template: "\n\n    <section class=\"projects-section-container\">\n      <div v-for=\"project in projects\" v-if=\"project.valid\" class=\"project\">\n        <img :src=\"project.img\" alt=\"project.name\" class=\"project-img\">\n        <ul class=\"tag-list\">\n          <li v-for=\"tag in project.tags\">{{ tag }}</li>\n        </ul>\n        <h2 class=\"project-title\">{{ project.name }}</h2>\n        <p>{{ project.description }}</p>\n\n        <div class=\"project-buttons\">\n          <button class=\"demo\" @click=\"goTo(project.demoURL)\">Demo</button>\n          <button class=\"code\" @click=\"goTo(project.codeURL)\">Code</button>\n        </div>\n      </div>\n    </section>\n    ",
  data: function data() {
    return {
      tags: {
        '#Front-end': true,
        '#Full-Stack': true,
        '#Game': true
      }
    };
  },
  methods: {
    filterProjects: function filterProjects(tags) {},
    goTo: function goTo(link) {
      if (link) {
        window.location.assign(link);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    eventBus.$on('filter', function (tags) {
      _this.tags = tags;
      eventBus.$emit('filter-projects', _this.tags);
    });
  }
};
var eventBus = new Vue();
var app = new Vue({
  el: '.profile-container',
  data: {
    projects: [{
      img: 'IMG/Countries-Quiz.png',
      name: 'Countries Quiz',
      tags: ['#Game'],
      demoURL: 'https://eufraniodiogo.github.io/Countries-Quiz/',
      codeURL: 'https://github.com/EufranioDiogo/Countries-Quiz',
      description: 'Game that allow the growf of the knowledges about countries, trying to guess questions made there.',
      valid: true
    }, {
      img: 'IMG/AwesomeQuotes.png',
      name: 'Awesome Quotes',
      tags: ['#Front-end'],
      demoURL: 'https://eufraniodiogo.github.io/AwesomeQuotes/',
      codeURL: 'https://github.com/EufranioDiogo/AwesomeQuotes',
      description: 'Sometimes one I need something to think about and get some motivation I enter at this app, it can help you.',
      valid: true
    }, {
      img: 'IMG/ImgUploader.png',
      name: 'Img Uploader',
      tags: ['#Full-Stack'],
      demoURL: 'https://secret-waters-42028.herokuapp.com/',
      codeURL: 'https://github.com/EufranioDiogo/ImgUploader',
      description: 'Here you upload your images and get access of it any where you\'re',
      valid: true
    }]
  },
  components: {
    'header-component': headerComponent,
    'hobbies-skills-component': hobbiesSkillsComponent,
    'main-container-component': mainContainerComponent,
    'projects-panel-controller-component': projectControllerComponent,
    'projects-show-up-component': projectsShowUpConteinerComponent
  },
  mounted: function mounted() {
    var _this2 = this;

    eventBus.$on('filter-projects', function (tags) {
      var flag = false;

      for (var tag in tags) {
        for (var i = 0; i < _this2.projects.length; i++) {
          for (var j = 0; j < _this2.projects[i].tags.length; j++) {
            console.log(tag + ' == ' + _this2.projects[i].tags[j]);

            if (tags[tag] && tag == _this2.projects[i].tags[j]) {
              flag = true;
              _this2.projects[i].valid = true;
              break;
            } else if (tags[tag] == false && tag == _this2.projects[i].tags[j]) {
              _this2.projects[i].valid = false;
            }
          }
        }
      }
    });
  }
});