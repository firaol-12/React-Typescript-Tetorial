import {expect, test} from "vitest"
import {add} from "./vitest-test";

test("add 2 + 4 test", ()=>{
    expect(add(2,4)).toBe(6);
})

test("add 2 + 3 test", ()=>{
    expect(add(2,3)).toBe(5);
})

test("add 2 + 8 test", ()=>{
    expect(add(2,8)).toBe(100);
})