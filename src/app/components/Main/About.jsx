import React, { useState } from 'react';
export default function Form() {

    return (
        <React.Fragment>

            <section className='c-about'>
                <div className="c-about__left">
                    <h2 className='c-about__title'>Sobre nós</h2>
                    <p className='c-about__body'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae expedita amet minus, deleniti non voluptate aspernatur doloremque reprehenderit, doloribus veritatis veniam ducimus possimus rerum ab assumenda nesciunt odio dignissimos et quibusdam. Doloremque, eligendi, corporis porro exercitationem totam odit voluptatem repellendus harum tenetur beatae, fuga eius eos dolorum fugit incidunt aut. Distinctio voluptatum odio vero consectetur ipsum, ab placeat mollitia ea possimus quo cum deserunt tenetur excepturi necessitatibus labore. Nisi, mollitia modi velit minima aperiam nesciunt asperiores nihil perspiciatis iusto vel ipsum harum ad perferendis sint nulla quibusdam fugit illo a accusamus at totam excepturi? Aliquam repudiandae modi quaerat soluta?
                    </p>
                </div>
                <div className="c-about__right">
                    <div className="c-about__image">
                        <img src={ __dirname + `img/svg/svg-about.png` } alt="" />
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}