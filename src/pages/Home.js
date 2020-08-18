const Home = () =>{
    const view = `
    <div>
        <h1 class="cover-heading">Project Guten Tag</h1>
        <p class="lead">This project generates a file with the text good morning in different languages</p>
        <p class="lead">
            <button id="save-btn" onclick="button();" class="btn btn-lg btn-secondary">Let's go!</button>
        </p>    
    </>
    `;
    return view;
}; 


export default Home;