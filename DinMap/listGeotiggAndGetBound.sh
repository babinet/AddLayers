
#!/bin/sh

if [ -f list_temp ]
then
rm list_temp
fi

allgeotif=$(sudo find . -name *.geotiff | sed 's/\/\//\//g')

echo "$allgeotif"  > AllTiffinServer
while read TiffinServer
do
GeotiffName=$(echo "$TiffinServer" |  awk -F '/' '{print $NF}')
#echo "$GeotiffName hello"
gdalinfo "$TiffinServer" > gdalinfo
coodinate=$(
while read gdalinfoline
do
echo "$gdalinfoline" |awk '/Size is / {print $0"|"}'| sed 's/Size is //g' | tr ',' 'x'| tr -d ' '
echo "$gdalinfoline" |awk '/Upper Left/'| awk -F'(' '{print $2 }'| awk -F')' '{print $1"|"}' | sed 's/ //g'
echo "$gdalinfoline" |awk '/Lower Left/'| awk -F'(' '{print $2 }'| awk -F')' '{print $1"|"}' | sed 's/ //g'
echo "$gdalinfoline" |awk '/Upper Right/'| awk -F'(' '{print $2 }'| awk -F')' '{print $1"|"}' | sed 's/ //g'
echo "$gdalinfoline" |awk '/Lower Right/'| awk -F'(' '{print $2 }'| awk -F')' '{print $1"|"}' | sed 's/ //g'
echo "$gdalinfoline" |awk '/Center/' | awk -F'(' '{print $2 }'| awk -F')' '{print $1"|"}' | sed 's/ //g'
done < gdalinfo
)
MachineName=$(echo planche"$GeotiffName" |tr '-' '_' | awk '{print tolower($0)}'| sed 's/.geotiff//g')
Allcoord=$(echo "$coodinate"| tr -d '\n')
Name=$(echo $GeotiffName | sed 's/.geotiff//g')
echo "$Name|$GeotiffName|$Allcoord$MachineName" >> list_temp
done < AllTiffinServer

echo "Name|Filname|Size|Upper_Left|Lower_Left|Upper_Right|Lower_Right|Center|MachineName" > Map_in_Geoserver.csv
cat list_temp >> Map_in_Geoserver.csv


if [ -f list_temp ]
then
rm list_temp AllTiffinServer gdalinfo
fi
