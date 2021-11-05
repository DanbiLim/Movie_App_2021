import React from "react";

//함수형(현재 사용 권장하는 방식)
// function Macaron() {
//     return(
//         <h1>I love macaron</h1>
//     );
// }


//클래스형
class Macaron extends React.Component {
    render(){
        return (
            <h1>I love macaron</h1>
        );
    }
}

export default Macaron;