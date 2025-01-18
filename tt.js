function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
       ./images/00001.png
       ./images/00002.png
       ./images/00003.png
       ./images/00004.png
       ./images/00005.png
       ./images/00006.png
       ./images/00007.png
       ./images/00008.png
       ./images/00009.png
       ./images/00010.png
       ./images/00011.png
       ./images/00012.png
       ./images/00013.png
       ./images/00014.png
       ./images/00015.png
       ./images/00016.png
       ./images/00017.png
       ./images/00018.png
       ./images/00019.png
       ./images/00020.png
       ./images/00021.png
       ./images/00022.png
       ./images/00023.png
       ./images/00024.png
       ./images/00025.png
       ./images/00026.png
       ./images/00027.png
       ./images/00028.png
       ./images/00029.png
       ./images/00030.png
       ./images/00031.png
       ./images/00032.png
       ./images/00033.png
       ./images/00034.png
       ./images/00035.png
       ./images/00036.png
       ./images/00037.png
       ./images/00038.png
       ./images/00039.png
       ./images/00040.png
       ./images/00041.png
       ./images/00042.png
       ./images/00043.png
       ./images/00044.png
       ./images/00045.png
       ./images/00046.png
       ./images/00047.png
       ./images/00048.png
       ./images/00049.png
       ./images/00050.png
       ./images/00051.png
       ./images/00052.png
       ./images/00053.png
       ./images/00054.png
       ./images/00055.png
       ./images/00056.png
       ./images/00057.png
       ./images/00058.png
       ./images/00059.png
       ./images/00060.png
       ./images/00061.png
       ./images/00062.png
       ./images/00063.png
       ./images/00064.png
       ./images/00065.png
       ./images/00066.png
       ./images/00067.png
       ./images/00068.png
       ./images/00069.png
       ./images/00070.png
       ./images/00071.png
       ./images/00072.png
       ./images/00073.png
       ./images/00074.png
       ./images/00075.png
       ./images/00076.png
       ./images/00077.png
       ./images/00078.png
       ./images/00079.png
       ./images/00080.png
       ./images/00081.png
       ./images/00082.png
       ./images/00083.png
       ./images/00084.png
       ./images/00085.png
       ./images/00086.png
       ./images/00087.png
       ./images/00088.png
       ./images/00089.png
       ./images/00090.png
       ./images/00091.png
       ./images/00092.png
       ./images/00093.png
       ./images/00094.png
       ./images/00095.png
       ./images/00096.png
       ./images/00097.png
       ./images/00098.png
       ./images/00099.png
       ./images/00100.png
       ./images/00101.png
       ./images/00102.png
       ./images/00103.png
       ./images/00104.png
       ./images/00105.png
       ./images/00106.png
       ./images/00107.png
       ./images/00108.png
       ./images/00109.png
       ./images/00110.png
       ./images/00111.png
       ./images/00112.png
       ./images/00113.png
       ./images/00114.png
       ./images/00115.png
       ./images/00116.png
       ./images/00117.png
       ./images/00118.png
       ./images/00119.png
       ./images/00120.png
       ./images/00121.png
       ./images/00122.png
       ./images/00123.png
       ./images/00124.png
       ./images/00125.png
       ./images/00126.png
       ./images/00127.png
       ./images/00128.png
       ./images/00129.png
       ./images/00130.png
       ./images/00131.png
       ./images/00132.png
       ./images/00133.png
       ./images/00134.png
       ./images/00135.png
       ./images/00136.png
       ./images/00137.png
       ./images/00138.png
       ./images/00139.png
       ./images/00140.png
       ./images/00141.png
       ./images/00142.png
       ./images/00143.png
       ./images/00144.png
       ./images/00145.png
       ./images/00146.png
       ./images/00147.png
       ./images/00148.png
       ./images/00149.png
       ./images/00150.png
       ./images/00151.png
       ./images/00152.png
       ./images/00153.png
       ./images/00154.png
       ./images/00155.png
       ./images/00156.png
       ./images/00157.png
       ./images/00158.png
       ./images/00159.png
       ./images/00160.png
       ./images/00161.png
       ./images/00162.png
       ./images/00163.png
       ./images/00164.png
       ./images/00165.png
       ./images/00166.png
       ./images/00167.png
       ./images/00168.png
       ./images/00169.png
       ./images/00170.png
      
   `;
  return data.split("\n")[index];
}

const frameCount = 170;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.fromTo(
  "#page1>.text-wrap",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page1",
      scroller: `#main`,
      start: "top 20%",
      end: "top 130%",
      pin: true,
      scrub: true,
      stagger: 0.1,
    },
  }
);

gsap.fromTo(
  "#page2>.text-wrap",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: `#main`,
      start: "top 20%",
      end: "top 100%",
      pin: true,
      scrub: true,
      stagger: 0.1,
    },
  }
);

gsap.fromTo(
  "#page3>.text-wrap",
  {
    y: "100%",
    opacity: 0,
  },
  {
    y: "0%",
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: `#main`,
      start: "top 40%",
      end: "top 100%",
      pin: true,
      scrub: true,
      stagger: 0.1,
    },
  }
);

document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab-btn');
  const grids = {
      makes: document.querySelector('.makes-grid'),
      cities: document.querySelector('.cities-grid'),
      categories: document.querySelector('.categories-grid')
  };

  // Show initial grid (categories)
  showGrid('categories');

  tabs.forEach(tab => {
      tab.addEventListener('click', function() {
          // Remove active class from all tabs
          tabs.forEach(t => t.classList.remove('active'));
          
          // Add active class to clicked tab
          this.classList.add('active');
          
          // Show the corresponding grid
          const gridToShow = this.getAttribute('data-tab');
          showGrid(gridToShow);
      });
  });

  function showGrid(gridName) {
      // Hide all grids
      Object.values(grids).forEach(grid => {
          grid.style.display = 'none';
      });
      
      // Show selected grid with fade effect
      grids[gridName].style.display = 'grid';
      grids[gridName].style.opacity = '0';
      setTimeout(() => {
          grids[gridName].style.opacity = '1';
      }, 50);
  }
});

//feature and other products
 function featured(){


const cars = [
  {
    id: 1,
    name: 'Honda BR-V 2018',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 2,
    name: 'Suzuki Alto 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 3,
    name: 'Honda Vezel 2019',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 4,
    name: 'Toyota Yaris 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 5,
    name: 'Toyota Camry 2020',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 6,
    name: 'Honda Civic 2022',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 7,
    name: 'BMW 3 Series 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 8,
    name: 'Mercedes C-Class 2020',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 9,
    name: 'Audi A4 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 10,
    name: 'Tesla Model 3 2022',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 11,
    name: 'Porsche 911 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 12,
    name: 'Range Rover Sport 2022',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  }
];

class Carousel {
  constructor() {
    this.currentIndex = 0;
    this.carousel = document.getElementById('carousel');
    this.indicators = document.getElementById('indicators');
    this.counter = document.querySelector('.counter');
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
    this.setupEventListeners();
    this.updateSlides();
  }

  init() {
    // Create indicators
    cars.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
      indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
      indicator.addEventListener('click', () => this.goToSlide(index));
      this.indicators.appendChild(indicator);
    });

    // Create initial slides
    this.createSlides();
  }

  createSlides() {
    this.carousel.innerHTML = '';
    cars.forEach((car, index) => {
      const offset = (index - this.currentIndex) * 100;
      const isActive = index === this.currentIndex;
      const isNext = index === (this.currentIndex + 1) % cars.length;
      const isPrev = index === (this.currentIndex - 1 + cars.length) % cars.length;
      const isVisible = isActive || isNext || isPrev;

      if (!isVisible) return;

      const slide = document.createElement('div');
      slide.className = 'car-card';
      slide.style.transform = `translateX(${offset}%) translateZ(${isActive ? 0 : -200}px) rotateY(${offset * 0.2}deg)`;
      slide.style.opacity = isActive ? '1' : '0.5';
      slide.style.zIndex = isActive ? '10' : '0';

      slide.innerHTML = `
        <div class="car-card-inner">
          <div class="car-image-wrapper">
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="featured-badge">Featured</div>
          </div>
          <div class="car-details">
            <h3 class="car-name">${car.name}</h3>
            <p class="car-price">${car.price}</p>
            <div class="car-location">
              <span>📍</span>
              ${car.location}
            </div>
          </div>
        </div>
      `;

      this.carousel.appendChild(slide);
    });
  }

  setupEventListeners() {
    document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
    document.querySelector('.next').addEventListener('click', () => this.nextSlide());

    this.carousel.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    });

    this.carousel.addEventListener('touchmove', (e) => {
      this.touchEndX = e.touches[0].clientX;
    });

    this.carousel.addEventListener('touchend', () => {
      const touchDiff = this.touchStartX - this.touchEndX;
      if (Math.abs(touchDiff) > 75) {
        if (touchDiff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });
  }

  updateSlides() {
    this.createSlides();
    this.updateIndicators();
    this.updateCounter();
  }

  updateIndicators() {
    const indicators = this.indicators.children;
    Array.from(indicators).forEach((indicator, index) => {
      indicator.className = `indicator ${index === this.currentIndex ? 'active' : ''}`;
    });
  }

  updateCounter() {
    this.counter.textContent = `${this.currentIndex + 1} of ${cars.length}`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % cars.length;
    this.updateSlides();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + cars.length) % cars.length;
    this.updateSlides();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlides();
  }
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});
};


// featured();
// Define the cars array
function feature(){
const cars = [
  {
    id: 1,
    name: 'Honda BR-V 2018',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price',
  },
  {
    id: 2,
    name: 'Suzuki Alto 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price',
  },
  {
    id: 3,
    name: 'Honda Vezel 2019',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price',
  },
  {
    id: 4,
    name: 'Toyota Yaris 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 5,
    name: 'Toyota Camry 2020',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 6,
    name: 'Honda Civic 2022',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 7,
    name: 'BMW 3 Series 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 8,
    name: 'Mercedes C-Class 2020',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 9,
    name: 'Audi A4 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 10,
    name: 'Tesla Model 3 2022',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 11,
    name: 'Porsche 911 2021',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  },
  {
    id: 12,
    name: 'Range Rover Sport 2022',
    location: 'Karachi',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=800',
    price: 'Call for price'
  }
  // Add more cars if needed
];

// Carousel class definition
class Carousel {
  constructor(carouselId, indicatorsId, counterSelector, cars) {
    this.currentIndex = 0;
    this.carousel = document.getElementById(carouselId);
    this.indicators = document.getElementById(indicatorsId);
    this.counter = document.querySelector(counterSelector);
    this.cars = cars;
    this.init();
    this.setupEventListeners();
    this.updateSlides();
  }

  init() {
    this.indicators.innerHTML = '';
    this.cars.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
      indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
      indicator.addEventListener('click', () => this.goToSlide(index));
      this.indicators.appendChild(indicator);
    });
    this.createSlides();
  }

  createSlides() {
    this.carousel.innerHTML = '';
    this.cars.forEach((car, index) => {
      const offset = (index - this.currentIndex) * 100;
      const isActive = index === this.currentIndex;
      const slide = document.createElement('div');
      slide.className = 'car-card';
      slide.style.transform = `translateX(${offset}%)`;
      slide.style.opacity = isActive ? '1' : '0.5';
      slide.innerHTML = `
        <div class="car-card-inner">
          <div class="car-image-wrapper">
            <img src="${car.image}" alt="${car.name}" class="car-image">
            <div class="featured-badge">Featured</div>
          </div>
          <div class="car-details">
            <h3 class="car-name">${car.name}</h3>
            <p class="car-price">${car.price}</p>
            <div class="car-location">
              <span>📍</span>${car.location}
            </div>
          </div>
        </div>
      `;
      this.carousel.appendChild(slide);
    });
  }

  setupEventListeners() {
    const prevButton = this.carousel.parentElement.querySelector('.prev');
    const nextButton = this.carousel.parentElement.querySelector('.next');

    prevButton.addEventListener('click', () => this.prevSlide());
    nextButton.addEventListener('click', () => this.nextSlide());
  }

  updateSlides() {
    this.createSlides();
    this.updateIndicators();
    this.updateCounter();
  }

  updateIndicators() {
    const indicators = this.indicators.children;
    Array.from(indicators).forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex);
    });
  }

  updateCounter() {
    this.counter.textContent = `${this.currentIndex + 1} of ${this.cars.length}`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.cars.length;
    this.updateSlides();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.cars.length) % this.cars.length;
    this.updateSlides();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlides();
  }
}

// Function to initialize carousels
function initializeCarousel(configs, carsData) {
  configs.forEach(({ carouselId, indicatorsId, counterSelector }) => {
    new Carousel(carouselId, indicatorsId, counterSelector, carsData);
  });
}

// Initialize carousels on page load
document.addEventListener('DOMContentLoaded', () => {
  const carouselsConfig = [
    { carouselId: 'carousel', indicatorsId: 'indicators', counterSelector: '.counter' },
    { carouselId: 'carousel2', indicatorsId: 'indicators', counterSelector: '.counter' },
  ];

  initializeCarousel(carouselsConfig, cars);
});

}
function Newcars(){
  const cars = [
    {
      id: 1,
      name: 'Honda BR-V 2018',
      year: 2018,
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price',
    },
    {
      id: 2,
      name: 'Suzuki Alto 2021',
      year: 2021,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price',
    },
    {
      id: 3,
      name: 'Honda Vezel 2019',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price',
    },
    {
      id: 4,
      name: 'Toyota Yaris 2021',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 5,
      name: 'Toyota Camry 2020',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 6,
      name: 'Honda Civic 2022',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 7,
      name: 'BMW 3 Series 2021',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 8,
      name: 'Mercedes C-Class 2020',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 9,
      name: 'Audi A4 2021',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 10,
      name: 'Tesla Model 3 2022',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 11,
      name: 'Porsche 911 2021',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    },
    {
      id: 12,
      name: 'Range Rover Sport 2022',
      location: 'Karachi',
      image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80&w=800',
      price: 'Call for price'
    }
    // Add more cars if needed
  ];
  
  // Carousel class definition
  class Carousel {
    constructor(carouselId, indicatorsId, counterSelector, cars) {
      this.currentIndex = 0;
      this.carousel = document.getElementById(carouselId);
      this.indicators = document.getElementById(indicatorsId);
      this.counter = document.querySelector(counterSelector);
      this.cars = cars;
      this.init();
      this.setupEventListeners();
      this.updateSlides();
    }
  
    init() {
      this.indicators.innerHTML = '';
      this.cars.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
        indicator.addEventListener('click', () => this.goToSlide(index));
        this.indicators.appendChild(indicator);
      });
      this.createSlides();
    }
  
    createSlides() {
      this.carousel.innerHTML = '';
      this.cars.forEach((car, index) => {
        const offset = (index - this.currentIndex) * 100;
        const isActive = index === this.currentIndex;
        const slide = document.createElement('div');
        slide.className = 'car-card';
        slide.style.transform = `translateX(${offset}%)`;
        slide.style.opacity = isActive ? '1' : '0.5';
        slide.innerHTML = `
          <div class="car-card-inner">
            <div class="car-image-wrapper">
              <img src="${car.image}" alt="${car.name}" class="car-image">
              <div class="featured-badge">Featured</div>
            </div>
            <div class="car-details">
              <h3 class="car-name">${car.name}</h3>
              <p class="car-price">${car.price}</p>
              <div class="car-modal-year">
                <span>📍</span>${car.year}
              </div>
            </div>
          </div>
        `;
        this.carousel.appendChild(slide);
      });
    }
  
    setupEventListeners() {
      const prevButton = this.carousel.parentElement.querySelector('.prev');
      const nextButton = this.carousel.parentElement.querySelector('.next');
  
      prevButton.addEventListener('click', () => this.prevSlide());
      nextButton.addEventListener('click', () => this.nextSlide());
    }
  
    updateSlides() {
      this.createSlides();
      this.updateIndicators();
      this.updateCounter();
    }
  
    updateIndicators() {
      const indicators = this.indicators.children;
      Array.from(indicators).forEach((indicator, index) => {
        indicator.classList.toggle('active', index === this.currentIndex);
      });
    }
  
    updateCounter() {
      this.counter.textContent = `${this.currentIndex + 1} of ${this.cars.length}`;
    }
  
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.cars.length;
      this.updateSlides();
    }
  
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.cars.length) % this.cars.length;
      this.updateSlides();
    }
  
    goToSlide(index) {
      this.currentIndex = index;
      this.updateSlides();
    }
  }
  
  // Function to initialize carousels
  function initializeCarousel(configs, carsData) {
    configs.forEach(({ carouselId, indicatorsId, counterSelector }) => {
      new Carousel(carouselId, indicatorsId, counterSelector, carsData);
    });
  }
  
  // Initialize carousels on page load
  document.addEventListener('DOMContentLoaded', () => {
    const carouselsConfig = [
      { carouselId: 'carousel2', indicatorsId: 'indicators', counterSelector: '.counter' },
    ];
  
    initializeCarousel(carouselsConfig, cars);
  });
  
  }
feature();
Newcars();