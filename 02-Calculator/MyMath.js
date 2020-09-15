/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        this.value = value * 1; 
    }

    add(value) {
        let v;
        v = this.value + value;
        return v;
    }

    subtract(value) {
        let v;
        v = this.value - value;
        return v;
    }

    multiply(value) {
        let v;
        v = this.value * value;
        return v;
    }

    divide(value) {
        let v;
        v = this.value / value;
        return v;
    }

    pow(value) {
        let v;
        if(value>0 && this.value>0){
            v = this.value;
            for(let i = 1; i < value+1; i++){
                v *= this.value;
            }
        }
        return v;
    }

    faculty() {
        
        if(this.value%1 === 0 && this.value>=0){
            if(this.value === 0 || this.value === 1){
                return 1;
            }else{
                let v = this.value;
                for(let i = this.value-1; i > 1; i --){
                    v *= i;
                }
                return v;
            }
        }
    }
}
