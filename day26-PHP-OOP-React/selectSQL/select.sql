SELECT *
FROM `country`;

SELECT *
FROM `country`
WHERE `Population` > 20000000;


SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC;


SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC
LIMIT 10;  /* Limit it only on 10 */

SELECT *
FROM `country`
WHERE `Population` > 20000000
ORDER BY `Population` DESC
LIMIT 10, 10;  /* Skip first 10, show me second 10 */