@modifyClass
class A {

}

function modifyClass(target: any) {
    target.prototype.extraProp = 'decorator'
    console.log("done")
}

// you can get "done", but you don't call.


