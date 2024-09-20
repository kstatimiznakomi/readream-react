import React from "react";

export const About: React.FC = () => {
    return <>
        <div className={'container'}>
            <div className={'d-flex justify-content-center  align-content-center flex-column about__bg'}>
                <div className={'d-flex justify-content-center align-content-center'}>
                    <h1>О нас</h1>
                </div>
                <div className={'text-justify'}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur at corporis culpa
                        dolores earum iure nostrum, nulla quas quia quibusdam, reprehenderit repudiandae rerum saepe
                        vero.
                        Distinctio impedit saepe voluptates!</p>
                </div>
            </div>
        </div>
    </>
}