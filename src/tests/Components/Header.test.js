import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow"
import Navbar from "../../components/Layout/navbar"



test("sholud be renderd navbar correctly",()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<Navbar />)
    expect(renderer.getRenderOutput()).toMatchSnapshot()
    console.log(renderer.getRenderOutput())
})