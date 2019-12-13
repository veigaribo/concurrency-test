A request sent before the end of the handling of another causes an interference, making the first client receive the response expected for the second.

The route defined at `/:a` first sets an internal mutable value with `a`, waits 3s, then sends back the current internal value.
One could expect this to always echo back `a`, which is not the case.

1. Client 1 sends a request to `.../abc `;
2. Less than 3s later, Client 2 sends a request to `.../xyz`;

3. Client 1 receives xyz;
4. Client 2 receives xyz;
