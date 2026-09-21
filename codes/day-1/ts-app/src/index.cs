var x = 100;
System.Console.WriteLine(x);

FnType<int, int> addDel = (a, b) => a + b;
delegate TResult FnType<T, TResult>(T a, T b);