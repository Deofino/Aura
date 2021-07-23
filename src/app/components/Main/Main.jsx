import React from 'react'
export default function Main(props) {

    return (
        <main className='l-main shadow radius'>
            {props.children}
        </main>
    )
}