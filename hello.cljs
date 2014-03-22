(ns hello)
(defn ^:export greet [n]
  (str "This came from hello.cljs and input to func is this: " n))
