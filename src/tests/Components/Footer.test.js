import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow"
import Footer from "../../components/Layout/footer"



test("should Footer component rendered correctly",()=>{
    const renderer=new ReactShallowRenderer()
    expect(renderer.getRenderOutput).toMatchSnapshot()
})