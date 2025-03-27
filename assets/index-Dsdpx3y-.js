(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}})();const c=t=>{const e=t.isLoggedIn(),o=window.location.pathname;return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${o==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
          <li><a href="/profile" class="${o==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
          ${e?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':`<li><a href="/login" class="${o==="/login"?"text-blue-600 font-bold":"text-gray-600"}">로그인</a></li>`}
        </ul>
      </nav>
    `},u=()=>`
    <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
    `,b=t=>{const e=t.getUser(),o=t.isLoggedIn();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
        ${c(t)}
        <main class="p-4">
            <div class="mb-4 bg-white rounded-lg shadow p-4">
            <h1 class="text-2xl font-bold mb-4">환영합니다${o?", "+e.username+"님":""}!</h1>
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
            </div>

            <div class="space-y-4">
            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">홍길동</p>
                    <p class="text-sm text-gray-500">5분 전</p>
                </div>
                </div>
                <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">김철수</p>
                    <p class="text-sm text-gray-500">15분 전</p>
                </div>
                </div>
                <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">이영희</p>
                    <p class="text-sm text-gray-500">30분 전</p>
                </div>
                </div>
                <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
                <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">박민수</p>
                    <p class="text-sm text-gray-500">1시간 전</p>
                </div>
                </div>
                <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
                <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
                <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                    <p class="font-bold">정수연</p>
                    <p class="text-sm text-gray-500">2시간 전</p>
                </div>
                </div>
                <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
                <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
                </div>
            </div>
            </div>
        </main>
        ${u()}
        </div>
    </div>
    `},f=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
            <div class="mb-4">
            <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded" required>
            </div>
            <div class="mb-4">
            <textarea id="bio" placeholder="간단한 소개" class="w-full p-2 border rounded h-24" required></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        </div>
    </main>
    `,g=t=>{const e=t.getUser();return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
        ${c(t)}
        <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
            </h2>
            <form id="profile-form">
                <div class="mb-4">
                <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                >
                <input
                    type="text"
                    id="username"
                    name="username"
                    value="${(e==null?void 0:e.username)||""}"
                    placeholder="이름을 입력해주세요."
                    class="w-full p-2 border rounded"
                    required
                />
                </div>
                <div class="mb-4">
                <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                >
                <input
                    type="email"
                    id="email"
                    name="email"
                    value="${(e==null?void 0:e.email)||""}"
                    placeholder="이메일을 입력해주세요."
                    class="w-full p-2 border rounded"
                />
                </div>
                <div class="mb-6">
                <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                >
                <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    placeholder="자기소개를 입력해주세요."
                    class="w-full p-2 border rounded"
                    required
                >${(e==null?void 0:e.bio)||""}</textarea>
                </div>
                <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                프로필 업데이트
                </button>
            </form>
            </div>
        </main>
        ${u()}
        </div>
    </div>
    `},m=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
            홈으로 돌아가기
        </a>
        </div>
    </main>
    `;function p(t){const e="/front_5th_chapter1-1/",o={"/":b,"/login":f,"/profile":g};function i(s){history.pushState({},"",s),l()}function l(){let s=window.location.pathname;s.startsWith(e)&&(s=s.slice(e.length-1)),s.startsWith("/")||(s="/"+s);let a=o[s];s==="/profile"&&!t.isLoggedIn()?(history.pushState({},"","/login"),a=o["/login"]):s==="/login"&&t.isLoggedIn()&&(history.pushState({},"","/"),a=o["/"]),a||(a=m),document.getElementById("root").innerHTML=a(t)}function r(){l(),window.addEventListener("popstate",l)}return{navigate:i,init:r}}function v(){let t=JSON.parse(localStorage.getItem("user"))||null;return{getUser(){return t},isLoggedIn(){return!!t},login(e){t=e,localStorage.setItem("user",JSON.stringify(t))},updateProfile(e){t={...t,...e},localStorage.setItem("user",JSON.stringify(t))},logout(){t=null,localStorage.removeItem("user")}}}const d=v(),n=p(d);document.addEventListener("click",t=>{if(t.target.id==="logout"&&(t.preventDefault(),console.log("로그아웃"),d.logout(),n.navigate("/login")),t.target.matches('a[href^="/"]')){t.preventDefault();const e=t.target.getAttribute("href");n.navigate(e)}});document.addEventListener("submit",t=>{if(t.preventDefault(),t.target.id==="login-form"){const e=t.target.querySelector("#username").value,o=t.target.querySelector("#bio").value||"";console.log("로그인:",{username:e,bio:o}),e&&(d.login({username:e,email:"",bio:o}),console.log("로그인 성공"),n.navigate("/profile"))}if(t.target.id==="profile-form"){const e=t.target.querySelector("#username").value,o=t.target.querySelector("#email").value||"",i=t.target.querySelector("#bio").value||"";console.log("프로필 업데이트:",{username:e,email:o,bio:i}),e&&(d.updateProfile({username:e,email:o,bio:i}),alert("프로필이 업데이트되었습니다!"),n.navigate("/profile"))}});n.init();
