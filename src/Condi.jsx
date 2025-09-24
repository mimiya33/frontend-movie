let content;

if (isLoggedIn) {
  content = <AdiminPanel />
} else {
  content = <LoginForm />
}

function LoginForm() {
  <button>로그인하세요</button>
}