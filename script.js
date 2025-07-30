document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const cheerSongListContainer = document.getElementById('cheer-song-list');
    const searchInput = document.getElementById('search-input'); // 검색 입력 필드 요소 가져오기

    // 응원가 데이터 (이전과 동일)
    const cheerSongData = {
        situation: [
            { title: "경기개시송", code: "109486500018872" },
            { title: "라인업 송", code: "129138000319844" },
            { title: "안타를 쳐줘요 베이베", code: "136722731856612" },
            { title: "안타우와", code: "73224093828928" },
            { title: "안타 가즈아", code: "125479724957739" },
            { title: "안타기도송", code: "108943481405318" },
            { title: "안타송 1", code: "94980913999744" },
            { title: "빠이빠이야", code: "121159719419416" },
            { title: "띠로리 삼진송", code: "126970090721176" },
            { title: "이머전시 삼진송", code: "113064550624431" },
            { title: "아웃송", code: "80331508866292" },
            { title: "볼넷송", code: "87620189889205" },
            { title: "풀카운트송", code: "140053089627332" },
            { title: "투수교체", code: "108160357615479" },
            { title: "투수교체 (25시즌)", code: "70998227758472" },
            { title: "비디오판독", code: "134408806305985" },
            { title: "홈런", code: "71709307948258" },
            { title: "견제송", code: "76235943549406" },
            { title: "환희의 송가", code: "80465788901070" }
        ],
        player: [
            { title: "이학주", code: "90984515792926", user: "" },
            { title: "이성규", code: "85821202784220", user: "korea_play123" },
            { title: "양우현", code: "135431440753218", user: "" },
            { title: "맥키넌", code: "75629892624200", user: "" },
            { title: "김헌곤", code: "86825841478914", user: "bagekx_ez" },
            { title: "김지찬", code: "104258711688649", user: "kononaid1012" },
            { title: "김상수", code: "119508248772797", user: "" },
            { title: "김도환", code: "115074717350559", user: "" },
            { title: "구자욱", code: "114385744341705", user: "TONY103838" },
            { title: "공민규", code: "105127920712283", user: "" },
            { title: "강한울", code: "132179831727651", user: "" },
            { title: "강민호", code: "71651909378570", user: "" },
            { title: "조민성", code: "122766422053686", user: "" },
            { title: "류지혁", code: "121093401473142", user: "buyssgdast" },
            { title: "류승민", code: "137820466731435", user: "" },
            { title: "김태훈", code: "91003086507739", user: "" },
            { title: "김재상", code: "110110339391837", user: "" },
            { title: "김성윤", code: "97813490234359", user: "korean12110" },
            { title: "김동진", code: "97179304023466", user: "" },
            { title: "피렐라", code: "90820127091487", user: "" },
            { title: "오재일", code: "105204352170270", user: "" },
            { title: "이해승", code: "138071428218143", user: "" },
            { title: "이재현", code: "76776181103914", user: "scpcommender" },
            { title: "김현준", code: "129443520283039", user: "samsunglions64" },
            { title: "김태군", code: "126429585240405", user: "" },
            { title: "김재혁", code: "11409333480934", user: "" },
            { title: "김재성", code: "115335240212393", user: "" },
            { title: "김영웅", code: "98570203201502", user: "lmjlove24" },
            { title: "김동엽", code: "74951134572587", user: "ghjkiasefy" },
            { title: "윤정빈", code: "75679928687348", user: "" },
            { title: "박병호", code: "111635361820352", user: "astro130924" },
            { title: "디아즈", code: "124261697065069", user: "xnl135" },
            { title: "이병헌", code: "120184122517536", user: "" },
            { title: "전병우", code: "76886453830965", user: "" },
            { title: "카데나스", code: "123269850771464", user: "" },
            { title: "안주형", code: "72105911287707", user: "" },
            { title: "오승환", code: "98653623672659", user: "" },
            { title: "박해민", code: "106213993500202", user: "yjh10203" },
            { title: "이승엽", code: "117827694745312", user: "" },
            { title: "최형우", code: "78368485557032", user: "" },
            { title: "진갑용", code: "138033745782896", user: "sinae1114" },
            { title: "이지영", code: "115402835186784", user: "" },
            { title: "박석민", code: "106528547933250", user: "" },
            { title: "나바로", code: "132642659937032", user: "chosankru39" },
            { title: "박한이", code: "111341859002231", user: "" },
            { title: "다린 러프", code: "80400148979383", user: "" },
            { title: "심재훈", code: "88638347485273", user: "" },
            { title: "박승규", code: "116039887945309", user: "" }
        ],
        team: [
            { title: "우리는 삼성", code: "85608183125548" },
            { title: "외쳐라 삼성", code: "128777201353077" },
            { title: "승리하라 삼성 라이온즈여", code: "86974523151770" },
            { title: "사랑한다 나의 삼성", code: "139214230532763" },
            { title: "모두 외쳐라", code: "137536409786557" },
            { title: "하나되는 박수", code: "105058608897303" },
            { title: "신나게 삼성", code: "81461996143352" },
            { title: "더크게 외쳐라", code: "95262335641086" },
            { title: "야이야이야", code: "122508673363207" },
            { title: "빅토리 라이온즈", code: "105969951629382" },
            { title: "Jump up Lions", code: "91261868026163" },
            { title: "승리의 기쁨을 나눠요", code: "103102397463786" },
            { title: "환희", code: "137373914543850" },
            { title: "나의 라이온즈", code: "123955241622305" },
            { title: "언제나", code: "138495338334111" },
            { title: "이 파도의 저 끝에서", code: "78918975853185" },
            { title: "다시 한번 힘을 내라", code: "86554271868912" },
            { title: "영원하라 라이온즈여", code: "104619436393405" },
            { title: "투게더", code: "83598599890169" },
            { title: "승리의 라이온즈", code: "103876793761313" },
            { title: "승리를 위해", code: "123187983887978" },
            { title: "2020 승리하라 최강삼성", code: "93964519003509" },
            { title: "혼연일체(최강삼성)", code: "93426946775988" },
            { title: "우리들의 함성", code: "121408810278483" },
            { title: "승리의 그 이름", code: "119606950916188" },
            { title: "엘도라도", code: "107904479226427" },
            { title: "라이온킹", code: "117478950843193" },
            { title: "드림 오브 라이온즈", code: "86472452432407" },
            { title: "IF", code: "77215813610997" },
            { title: "He was beautiful", code: "136299389485909" },
            { title: "인연", code: "74503659033243" },
            { title: "플랜D 최강삼성", code: "131224352063582" },
            { title: "Early in the morning", code: "93717322546468" },
            { title: "컴온 필 더 노이즈", code: "86325491533772" },
            { title: "지중해", code: "106725883276177" },
            { title: "새가 되어 날으리", code: "74081499121567" },
            { title: "라이온즈 승리가", code: "79228800408718" },
            { title: "엘리제를 위하여", code: "101957765130643" }
        ],
        etc: [
            { title: "아파트", code: "128760016234146" },
            { title: "여행을 떠나요", code: "129598184668333" },
            { title: "챔피언", code: "110173021258214" }
        ]
    };

    let currentCategory = 'situation'; // 현재 선택된 카테고리를 추적

    // 응원가 리스트 렌더링 함수
    function renderCheerSongs(category, searchTerm = '') {
        cheerSongListContainer.innerHTML = ''; // 기존 리스트 초기화
        const songs = cheerSongData[category];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (!songs || songs.length === 0) {
            cheerSongListContainer.innerHTML = '<p>아직 등록된 응원가가 없습니다.</p>';
            return;
        }

        // 검색 조건 수정: title 또는 user에 검색어가 포함되는지 확인
        const filteredSongs = songs.filter(song => {
            const titleMatches = song.title.toLowerCase().includes(lowerCaseSearchTerm);
            const userMatches = song.user && song.user.toLowerCase().includes(lowerCaseSearchTerm);
            return titleMatches || userMatches;
        });


        if (filteredSongs.length === 0) {
            cheerSongListContainer.innerHTML = '<p>검색 결과가 없습니다.</p>';
            return;
        }

        filteredSongs.forEach(song => {
            const songItem = document.createElement('div');
            songItem.classList.add('song-item');

            const songInfo = document.createElement('div');
            songInfo.classList.add('song-info');

            const songTitle = document.createElement('div');
            songTitle.classList.add('song-title');
            songTitle.textContent = song.title;
            songInfo.appendChild(songTitle);

            const songCode = document.createElement('div');
            songCode.classList.add('song-code');
            songCode.textContent = song.code;
            songInfo.appendChild(songCode);

            // 선수 응원가 카테고리에만 사용자 닉네임 표시
            if (category === 'player' && song.user !== undefined) {
                const songUser = document.createElement('div');
                songUser.classList.add('song-user');
                songUser.textContent = song.user ? song.user : ''; // 사용자가 없으면 공란
                songInfo.appendChild(songUser);
            }

            const copyButton = document.createElement('button');
            copyButton.classList.add('copy-btn');
            copyButton.textContent = '복사하기';
            copyButton.dataset.code = song.code; // 복사를 위한 코드 저장

            copyButton.addEventListener('click', async (event) => {
                const codeToCopy = `:music ${event.target.dataset.code}`;
                try {
                    await navigator.clipboard.writeText(codeToCopy);
                    event.target.textContent = '복사 완료';
                    event.target.classList.add('copied');
                    setTimeout(() => {
                        event.target.textContent = '복사하기';
                        event.target.classList.remove('copied');
                    }, 1500); // 1.5초 후 원래대로 돌아옴
                } catch (err) {
                    console.error('클립보드 복사 실패:', err);
                    alert('복사에 실패했습니다. 수동으로 복사해주세요: ' + codeToCopy);
                }
            });

            songItem.appendChild(songInfo);
            songItem.appendChild(copyButton);
            cheerSongListContainer.appendChild(songItem);
        });
    }

    // 카테고리 버튼 클릭 이벤트
    categoryButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // 활성화된 버튼 스타일 초기화
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 클릭된 버튼 활성화
            event.target.classList.add('active');
            currentCategory = event.target.dataset.category; // 현재 카테고리 업데이트
            searchInput.value = ''; // 카테고리 변경 시 검색창 초기화
            renderCheerSongs(currentCategory); // 해당 카테고리의 응원가 로드
        });
    });

    // 검색 입력 필드에 'input' 이벤트 리스너 추가
    searchInput.addEventListener('input', (event) => {
        renderCheerSongs(currentCategory, event.target.value); // 현재 카테고리에서 검색어로 필터링하여 렌더링
    });


    // 초기 로드 시 '상황별 응원가' 표시
    // 페이지 로드 시 '상황별 응원가' 버튼을 활성화된 상태로 시작
    document.querySelector('.category-btn[data-category="situation"]').classList.add('active');
    renderCheerSongs('situation');
});
