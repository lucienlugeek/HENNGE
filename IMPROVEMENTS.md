### 1. Querying not precisely enough.

Use more items which belong to emails like from, to, subject etc as query criteria as the same as the exist date picker.

### 2. Not handy to clear query criteria

Add a button to clear all criteria in order to query all emails.

### 3. Pagination not included

In case a large mount of emails could be retrieved out, pagination should be used to slice queried data on either back-end or front-end.

If no pagination provided, I would use `ag-grid` or `Angular Material Scrolling` to optimize performance when display thousands data.

### 4. No delete function

A delete function should be added in order to remove useless or spam emails.

Put a checkbox at the head of every email item to do select or unselect certain email. 

Put one at the table header to select or unselect all emails currently displayed on page. 

Add other clickable element what no matter a button nor a link at the table header or upper space to do delete action.

### 5. *Tag function(additional)

In my consideration, as an audit system, it is useful to add a function which to indicate spam or dangerous emails.