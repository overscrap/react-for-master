import styled from "styled-components"


interface CircleProps{
    bgColor: string;
}

const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

function Circle({bgColor}:CircleProps) {
    return <Container bgColor={bgColor}/>;
}

export default Circle;

// interface PlayerShape {
//     name: string;
//     age: number;
// }
// const sayhello = (playerObj: PlayerShape) => {
//     `Hello ${playerObj.name} you are ${playerObj.age} years old.`;
// }

// sayhello({name:"kim",age:36});
// sayhello({name:"park",age:36, hello:1});