-- 1. color n = 0; drive_type n = 0
SELECT * FROM cars;

-- 2. color n = 1; drive_type n = 0
SELECT * FROM cars
WHERE color = $1;

-- 3. color n = 2+; drive_type n = 0
SELECT * FROM cars
WHERE color IN ($1);

-- 4. color n = 0; drive_type n = 1
SELECT * FROM cars
WHERE drive_type = $1;

-- 5. color n = 1; drive_type n = 1
SELECT * FROM cars
WHERE color = $1 AND drive_type = $2;

-- 6. color n = 2+; drive_type n = 1
SELECT * FROM cars
WHERE color IN ($1) AND drive_type = $2;

-- 7. color n = 0; drive_type n = 2+
SELECT * FROM cars
WHERE drive_type IN ($1);

-- 8. color n = 1; drive_type n = 2+
SELECT * FROM cars
WHERE color = $1 AND drive_type IN ($2);

-- 9. color n = 2+; drive_type n = 2+
SELECT * FROM cars
WHERE color IN ($1) AND drive_type IN ($2);

-- also, I don't believe you can pass in an array into an IN statement as $1, which further complicates things...
