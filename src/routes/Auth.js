const Auth = () => {
    return (
        <div>
            <form>
                <input type="email" placeholder="Email" required />
                <br/>
                <input type="password" placeholder="Password" required />
                <br/>
                <input type="submit" value="Log In"/>
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    );
};

export default Auth;