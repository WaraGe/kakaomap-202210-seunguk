var mapContainer = document.getElementById("map"); // 지도를 표시할 div
var mapOption = {
  center: new kakao.maps.LatLng(35.1523429538701, 129.0597183040282), // 지도의 중심좌표
  level: 3, // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);
// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

/*----------------------------------------------------------------------------------------*/

class MapService {
  static #instance = null;
  static getInstance() {
    if (this.#instance == null) {
      this.#instance = new MapService();
    }
    return this.#instance;
  }

  load() {
    this.addSearchInputEvent();
    this.addAsideToggleButtonEvent();
    this.addMenuTapEvent();
    // js에서는 같은 클래스 안에서 불러올때 this를 불러줘야함
  }

  addSearchInputEvent() {
    const searchInput = document.querySelector(".search-input");

    searchInput.onclick = () => {
      const searchRecent = document.querySelector(".search-recent");
      searchRecent.classList.toggle(
        "invisible-recent"
      ); /* 토글 on,off ,  선택자가 아니기 때문에 값만 들어감 */
    };
  }

  addAsideToggleButtonEvent() {
    const toggleButton = document.querySelector(".toggle-button");

    toggleButton.onclick = () => {
      const aside = document.querySelector("aside");
      aside.classList.toggle("invisible-aside");
      if (aside.classList.contains("invisible-aside")) {
        /*contains 포함하고 있는지*/
        toggleButton.textContent = "▶";
      } else {
        toggleButton.textContent = "◀";
      }
    };
  }

  addMenuTapEvent() {
    const mainMenuTab = document.querySelectorAll(".mainMenuTab");

    for (let i = 0; i < mainMenuTab.length; i++) {
      mainMenuTab[i].onclick = () => {
        for (let j = 0; j < mainMenuTab.length; j++) {
          mainMenuTab[j].classList.remove("tab-selected");
        }
        mainMenuTab[i].classList.add("tab-selected");

        const searchBody = document.querySelectorAll(".search-body");
        for (let j = 0; j < searchBody.length; j++) {
          searchBody[j].classList.add("invisible-body");
        }
        searchBody[i].classList.remove("invisible-body");
      };
    }
  }
}

// 윈도우 객체에 onload가 일어난다면,
window.onload = () => {
  MapService.getInstance().load();
};
