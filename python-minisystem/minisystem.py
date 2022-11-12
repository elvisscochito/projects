#Elviro Dominguez Soriano
#Jueves, 22 de Octubre de 2020
#Proyecto tipo 1

def ReadData(): #read file information
    """ with open("file.txt", "r") as File:
        Data=File.readlines() """
    File=open("file.txt", "r")
    Data=File.read().split("\n\n")
    File.close()
    return Data[:-1]

def WriteData(Data): #write information to the file
    File=open("file.txt", "w+")
    for d in Data:
        File.write(d)
        File.write("\n\n")
    File.truncate()
    File.close()

def Add(): #Define the function Add
    #Ask for the new registration information
    print ("Function add selected\n")
    print ("Enter the data of the new record")
    Name=input("Enter name: ")
    Phone=input("Enter phone: ")
    Username=input("Enter username: ")
    Birthday=input("Enter the birthday: ")
    Location=input("Enter the location: ")
    Career=input("Enter the career: ")
    Semester=input("Enter the semester: ")
    School=input("Enter the school: ")
    #Add values to the dictionary
    Lista=[] #Define the list "Lista"
    Diccionario={} #Define the dictionary "Diccionario"
    Diccionario["Name"]=Name
    Diccionario["Phone"]=Phone
    Diccionario["Username"]=Username
    Diccionario["Birthday"]=Birthday
    Diccionario["Location"]=Location
    Diccionario["Career"]=Career
    Diccionario["Semester"]=Semester
    Diccionario["School"]=School
    Lista.append(Diccionario) #Copy the content of the dictionary "Diccionario" to the list "Lista"
    #Shows the data entered
    print("Data name: "+Name+", phone: "+Phone+", username: "+Username+", birthday: "+Birthday+", location "+Location+", career: "+Career+", semester: "+Semester+" &  school: "+School+" captured successfully \n")
    #Send the information to the file "Archive.txt"
    File=open("file.txt", "a+") #Create the file
    for i in Lista:
        File.write(i["Name"])
        File.write("\n")
        File.write(i["Phone"])
        File.write("\n")
        File.write(i["Username"])
        File.write("\n")
        File.write(i["Birthday"])
        File.write("\n")
        File.write(i["Location"])
        File.write("\n")
        File.write(i["Career"])
        File.write("\n")
        File.write(i["Semester"])
        File.write("\n")
        File.write(i["School"])
        File.write("\n")
    File.write("\n")
    File.close()

def Consult(): #Define the function Consult
    #Show check records
    print ("Function  consult selected\n")
    Data=ReadData()
    i=0
    for Categories in Data:
        Registry=Categories.split('\n')
        print("Num.", i,", ".join(Registry))
        i+=1

def Modify(): #Define the function Modify
    print("Function modify selected\n")
    print ("0. Return")
    print ("1. Modify item")

    Option2=input("Select the option: ")

    if Option2=="0":
        print("Return")
        return

    elif Option2=="1":
        Consult() #Call to the Consult() function to display the data
        item=int(input("Select item to modify: "))
        Data=ReadData()
        del Data[item]
        WriteData(Data)
        Add()

    else:
        print("Error, select a valid option")  

def Delete(): #Define the function Borrar
    print ("Function delete selected\n")
    print ("0. Return")
    print ("1. Delete item")
    print ("2. Delete all")

    Option2=input("Select the option: ")

    if Option2=="0":
        print("Return")
        return

    elif Option2=="1":
        print ("Are you sure? \n")
        print ("0. Cancel")
        print ("1. Continue")
        Option3=input("Select the option: ")

        if Option3=="0":
            print("Delete selected item incompleted")
            return

        elif Option3=="1":
            Consult() #Call to the Consult() function to display the data
            item = int(input("Select an item to delete: "))
            Data=ReadData()
            del Data[item]
            WriteData(Data)
            print("Delete selected item completed")
        else:
            print("Error, select a valid option")   

    elif Option2=="2":
        print ("2. Delete all")
        print ("Are you sure? \n")
        print ("0. Cancel")
        print ("1. Continue")
        Option4=input("Select the option: ")

        if Option4=="0":
            print("0. Cancel")
            print ("Delete all incompleted")
            return

        elif Option4=="1":
            print("1. Continue")
            File=open("file.txt", "w")
            File.seek(0)
            File.truncate()
            File.close()
            print ("Delete all completed")

        else:
            print("Error, select a valid option")   

    else:
        print("Error, select a valid option")  

def main():
    while True:
        print ("Minisystem data management by Elviro Dominguez Soriano A01424591\n")
        print ("Main\n")
        print ("0. Break")
        print ("1. Add ")
        print ("2. Consult")
        print ("3. Modify")
        print ("4. Delete\n ")
        Option=input("Select the option: ")
        if Option=="0":
            print("Break")
            break
        elif Option=="1":
            Add()
        elif Option=="2":
            Consult()
        elif Option=="3":
            Modify()
        elif Option=="4":
            Delete()
        else:
            print("Error, select a valid option")
            continue
main()
