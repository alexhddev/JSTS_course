class Project {

    // fields:
    name: string
    private budget: number

    // constructor function
    constructor(name: string, budget?: number) {
        this.name = name;
        if (budget) {
            this.budget = budget
        } else {
            this.budget = 10000;
        }
    }

    setBudget(newBudge: number) {
        this.budget = newBudge
    }

    // methods
    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

    // a class should have one or few public methods
    // many private methods - organize the code
    
    calculateYearlyBudget(){
        // get inflation index
        this.getInflationIndex()
        // do calculations
        // get other info
        this.getInfo()
        // return budget
    }

    private getInflationIndex(){}
    private getInfo(){}
}

const coolProject = new Project('Cool Name', 20000);
const defaultProject = new Project('Default project');
coolProject.setBudget(1000)
coolProject.calculateYearlyBudget()