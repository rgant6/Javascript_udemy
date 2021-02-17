// JS uses Lexical Scope (Static Scope)
// Global scope - everything defined outside of all code blocks
// Local scope - defined inside a code block

// In a scope you can access variables defined in that scope or any parent/ancestor variables in that scope

// Global Scope (var1)
    // Local Scope (var2)
        // Local Scope (var4)
    // Local Scope (var3)

let var1 = "Var1"

if(true){
    console.log(var1)
    let var2 = "Var2"
    // This works 
    console.log(var2)

    if(true){
        let var4 = "var4"
    }
}
if(true){
    let var3 = 'var3'
}
// This doesn't
console.log(var2)

