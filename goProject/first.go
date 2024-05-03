package main

import (
	"fmt" 
	 "time" 
	 "math" 
)


const s string = "test"

func main() {
	
	i:= 1
	
	whatAmI := func(i interface{}) {
        switch t := i.(type) {
        case bool:
            fmt.Println("I'm a bool")
        case int:
            fmt.Println("I'm an int")
        default:
            fmt.Printf("Don't know type %T\n", t)
        }
	}
	whatAmI(i)
	t:=time.Now()
	switch {
	case t.Hour() < 10:
		fmt.Println("Please select niin")
	default :
		fmt.Println("Please afer your hour")
	}

	switch time.Now().Weekday(){
	case time.Saturday, time.Wednesday :
		fmt.Println(" its time to test")
	}

	f:=3
	switch f {
	case 1:
		fmt.Printf("one")
	case 2:
		fmt.Printf("two")
	case 3 :
		fmt.Println("three")
	}


	fmt.Println("hello world")
	fmt.Println("go"+"lang")
	fmt.Println("1+1 =",1+1)
	fmt.Println(true && false)

	string:= "hello world"
	num := 25
	wrong := false
	corect := true

	fmt.Println(string, num)
	fmt.Println(corect,wrong)

	var er int = 255 
	fmt.Println(er)

	const n = -90 
	fmt.Println(math.Abs(n))

	fmt.Println(math.Cos(n))

	// for i <= 3 {
	// 	fmt.Println(i)
	// 	i++
	// }
	for j := 0; j <7 ; j++ {
		fmt.Println(j)
	}

	
	


	
	

}