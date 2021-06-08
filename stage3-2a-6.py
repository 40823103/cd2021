with open("stage3_2a.txt") as fh:
 #先將我們存起來stage3_2a.txt打開並命名為fh
 data = fh.readlines()
 #將stage3_2a.txt的資料以串列形式存為data
for i in range(6):
 #將次數限定就不會告知list index out of range了
 newdata1 = data[i].replace('4823122','40823122')
 #因為40823122的學號打錯了,所以用 replace 把舊的替換成新的
 newdata2 = newdata1.replace('\t\t','')
 #因為有一組只有6人,所以用 replace 把空位刪除
 newdata3 = newdata2.replace('_','-')
 #因為在編輯txt的時候-會變成_,所以用 replace 把_修正為-
 group = newdata3.rstrip("\n").split("\t")
 #先取出newdata list中的第i項,消除元素中/n,再以\t取出需要的文字
 print('<p>'+group[0]+' | <a href="https://'+group[1]+'.github.io/'+group[0]+'">Website</a> | <a href="https://github.com/'+group[2]+'/'+group[0]+'">Repository</a></p>')
 for j in range(1,18,2):
 #設一個範圍,(1到18,每次+2,1<=j<18)
 try:
 n = group[j].replace('40823112','a40823112')
 #因為40823112的github帳號是a40823112,所以用 replace 把帳號修正
 print('<p>'+group[j]+' | Website:'+'<a href="https://'+n+'.github.io/cd2021'+'">'+group[j]+'</a>'+' | Repository:'+'<a href="https://github.com/'+n+'/cd2021'+'">'+group[j]+'</a> </p>')
 except:
 continue
 #這邊使用try.....except,因為有一組6個人,導致有空格,所以需要用continue讓迴圈繼續跑