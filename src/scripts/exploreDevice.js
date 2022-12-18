const heroLeftText = document.querySelector(".hero__left-text");

const handleEexploreDeviceClick = (e) =>{
    e.preventDefault();
    
    const changeWords = () =>{

            const headLines = ['BUY', 'VR', 'GAMES', 'IN', 'OUR', 'STORE'];
            let count = -1;

            const loading = () => {
                if(count > 4){
                    count = 0;
                }else{
                    count += 1;
                }

                console.clear();
                console.log(headLines[count]);
            }
          
            return setInterval(loading, 1000);
    }

    changeWords();
}

heroLeftText.addEventListener("click", handleEexploreDeviceClick);