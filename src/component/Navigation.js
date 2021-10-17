import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
    if (props.data === "cv") {
        var classname = "navbar navbar-dark navbar-expand-lg fixed-top header-blue"
        var link = '/'
    } else {
        var classname = "navbar navbar-dark navbar-expand-md navigation-clean-search"
        var link = '/'
    }
    return (
        <nav class={classname}>
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img style={{height:'90px'}} src="./assets/img/f.png"/></a><button data-bs-toggle="collapse" class="navbar-toggler"
                    data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span
                        class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse text-center justify-content-center align-items-center"
                    id="navcol-1">
                    <ul class="navbar-nav">
                <li class="nav-item"><Link class="nav-link" to="/cv">Curriculum vitae</Link></li>
                        <li class="nav-item"><a class="nav-link" href={`${link} #project`}>Project</a></li>
                <li class="nav-item"><a class="nav-link" href={`${link} #contact`}>Hire Me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
