###
 # 195) Tenth Line
 # Difficulty:  Easy
 # Topics: Shell
 # Companies: Adobe
###

# Read from the file file.txt and output the tenth line to stdout.
COUNT=0
while IFS= read -r line
do
  ((COUNT=COUNT+1))
  if [ $COUNT -eq 10 ]
  then
    echo "$line"
  fi
done < file.txt