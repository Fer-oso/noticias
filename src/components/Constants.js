export const  API ='&apiKey=c3e6ec0f5f774a0c8470e6828e638a77';
export const  URL ='https://newsapi.org/v2/top-headlines?';

export const call = URL+API;

/*
PARAMETROS
Top headlines /v2/top-headlines - returns breaking news headlines for a country and category, or currently running on a single or multiple sources. This is perfect for use with news tickers or anywhere you want to display live up-to-date news headlines and images.

Everything /v2/everything - we index every recent news and blog article published by over 30,000 different sources large and small, and you can search through them with this endpoint. This endpoint is better suited for news analysis and article discovery, but can be used to retrieve articles for display too.

We also have a minor endpoint that can be used to retrieve a small subset of the publishers we index from:

Sources /v2/sources - returns information (including name, description, and category) about the most notable sources we index. This list could be piped directly through to your users when showing them some of the options available.

Request parameters
country
The 2-letter ISO 3166-1 code of the country you want to get headlines for. Possible options: ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za . Note: you can't mix this param with the sources param.

category
The category you want to get headlines for. Possible options: business entertainment general health science sports technology . Note: you can't mix this param with the sources param.

sources
A comma-seperated string of identifiers for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index. Note: you can't mix this param with the country or category params.

q
Keywords or a phrase to search for.

pageSize
int
The number of results to return per page (request). 20 is the default, 100 is the maximum.

page
int
Use this to page through the results if the total results found is greater than the page size.

apiKey
REQUIRED
Your API key. Alternatively you can provide this via the X-Api-Key HTTP header.
*/ 