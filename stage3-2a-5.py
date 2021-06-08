# open file, default is read mode, since txt content no chinese char4
# no encoding = "UTF-08" is needed
with open("stage3_2a.txt") as fh:
    # readlines will read into the whole line and put into list format 23
    # has \n at the end of each line 13
    data = fh.readlines()
    data = [a.replace('4823122','40823122') for a in data]
    data = [c.replace('\t\t\t\t','') for c in data]
    print(data)
#print(len(data))1
for i in range(len(data)):
    group = data[i].rstrip("\n").split("\t")
    print('<p>'+group[0]+'|<a href="https://'+group[1]+'.github.io/stage3-ag'+group[0][9]+'">網站</a>|<a href="https://github.com/'+group[2]+'/stage3-ag'+group[0][9]+'">倉儲</a></p>')
# the following will use group data to generate needed html
   
    for j in range(2,18,2):
        try:
            print('<p>'+group[j]+'|Website:'+'<a href="https://'+group[j]+'.github.io/cd2021'+'">'+group[j]+'</a>'+'|Repository:'+'<a href="https://github.com/'+group[j]+'/cd2021'+'">'+group[j]+'</a></p>')
        except:
            continue