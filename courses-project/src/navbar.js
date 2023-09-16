function Navbar(props){

    function clickHandler(e){
        props.clickHandler(e);
    }

    return(
        <div>
            <div className='header'>Top Courses</div>

            <div className='categories' onClick={clickHandler}>
            <div className='all'>All</div>
            <div className='Development'>Development</div>
            <div className='Business'>Business</div>
            <div className='Design'>Design</div>
            <div className='Lifestyle'>Lifestyle</div>
            </div>
        </div>
    );
}

export default Navbar;