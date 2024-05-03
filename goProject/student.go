package main
import "fmt"

type student struct {

	fullName string
	age int
	nationality string

}

func main() {

	stu1:= student{fullName: "alirezaAlizadeh", age:5, nationality:"Alizadeh" }
	fmt.Print(stu1)

}