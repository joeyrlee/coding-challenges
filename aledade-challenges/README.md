# Aledade full-stack coding challenge
## Python
Write a python3 fn: `def solution(A, Y)`
that accepts as arguments a list of integers and an integer run length. It must find in that list all runs of run length consecutive numbers that increase or decrease by 1. It should return the list indices of the first element of each run. If there are not consecutive runs it should return an empty list.

E.g. `values=[1,2,3,5,10,9,8,9,10,11,7,8,7], run_length=3` returns `[0,4,6,7]`

Add comments on the code’s runtime and space complexity

## SQL
Given a transactions table structured:
```sql
Create table transactions (
    amount integer not null,
    date date not null
)
```
Assume that rows have transactions only from the same year. If these transaction records refer to a bank account and a user is charged $5 per month for months where there aren’t at least 3 negative transaction amounts (which represent payments) totaling <=-$100, write a SQL query to get the year-end balance.

## Vue
Implement a component in Vue v2.6 that renders a table with pagination
1. Table has class “table” and cols: “ID”, “First Name”, “Last Name”. It has data which can be fetched from https://example.com/api/users and that accepts one query parameter: `page` (with zero-based numbering). An example JSON response is:
    1. { “count”: 13, “results”: [{ id: 1, “firstName”: “David”, “lastName”: “Wallace”}, …]}
    2. `count`’s value refers to the total results count and `results` contains items from the given page; the page size = 10. If a request is sent with `page` larger than the total number of pages, then `results` will be empty.
2. Initially, the table should be populated with the first page of data
3. The pagination section has class name `pagination` and consists of four buttons which are stacked horizontally:
    1. first: button class `first-page-btn` navigates to the first page and should be disabled when current page = first page
    2. Previous: class `previous-page-btn` should navigate to prev page but be disabled when current page = first page
    3. Next: class `next-page-btn` navigates to the next page of data but is disabled when current page = last one
    4. Last: class `last-page-btn` navigates to the last page but is disabled when on the last one
4. Use fetch or axios API. All buttons should be disabled when data is currently loaded or when the number of results === 0.

Assumptions:
1. https://example.com is a mocked service that can only be accessed in this env. Assume that a request never fails
2. `?page=0` means the first page
3. Design/styling is not assessed

* Ex 1: The first page of data should be displayed initially, meaning while the component mounts, a request to `https://example.com/api/users?page=0` should be made
* Ex 2: see paginated_table_demo.gif for an example