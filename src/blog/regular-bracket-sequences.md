---
title: regular-bracket-sequences
layout: blog 
tags: blog
id: 1
name: My Approach to "Regular Bracket Sequences"
author: M Fadhil Al-Fatih
cover: ./img/kurung.png
profile: ./img/ketuaSejarah.jpeg
description: About how to produce every possible mathematically valid bracket sequences, if given n many brackets. I used recursion and a generator concept with python.
date: 2021-06-30
category: COMPETITIVE PROGRAMMING
--- 

Solving a great competitive programming question has always been
fun for me. In fact, that's the reason I choose programming for my
life path. We can let our own creativity to answer the question,
looking aside on how efficient the solution is. On this blog, I
want to share my thinking journey to answer this programming
question. Quick disclaimer, I might do stuff that is unnecessary
or even worse all of this is unnecessary. So, I would like to get
some feedback, you can contact me through social media.

## 1. The Question

Basically, the question wants us to output the mathematically
valid pattern of brackets, for n many brackets "()" give n many
pattern (you can see the original question [here](https://codeforces.com/contest/1574/problem/A). 
Long story short, my friend already have an answer for it, but
still don't feel right because the answer just give n many
pattern. I just think why not make an answer that can give EVERY
POSSIBLE pattern of n many brackets. I'm still not comfortable
enough to say that my answer provides every pattern, but i think
its cool enough.

## 2. Idea

We know that we can put bracket inside of bracket in math like
"(())", and put it aside "()()" that's basically all possible
pattern if we only have 2 brackets. If we have 3 brackets the
pattern will look like "(()())" or "(())()". From all of that
example, I can organize the pattern by looking at the outer
bracket, and bracket that inside of an another bracket. I can say
that for 1 outer bracket, it takes 1 slot, for example: "(())()"
for that example we can say that it has 2 outer brackets, so that
example took 2 slot "_ _", AND count how many brackets on every
slot, so for "(())()" the answer is "2 1" because one slot has 2
brackets in it and the other has 1.

![picture describing bracketSlot](../img/bracketSlot.png)

By the new way of intepreting the pattern of bracket, 
we can say every possible pattern of n brackets follow
the algorithm of this:

![picture describing algorithmSlot](../img/algorithmSlot.png)

for every slot that has bracket more than 1, that slot will
increment 1 bracket to the very next right slot, also the if the
next right slot has more than 1 too, it will repeat the
algorithm.


Okay, about the brackets that inside an another bracket, we can
see the brackets inside the pattern 3 "((())) and (()())" it gives
the every possible pattern of 2 brackets (the n-1 of it) "(()) and
()()", so that is a really visible recursion/repetition.


## 3. Code

We already got the idea, now just need to write that algorithm
into a programming language and turn that number intepretation
back to brackets. I want to make the program using python
generator, so we don't need to wait for every possible pattern
finished calculated, and get the answer one by one. I will explain
shortly every component of my code and the python concept (you can
access the full code [here](https://gist.github.com/FadhilAF/02b561e5693f512781a70704d937ad66).

![picture describing dependencyDiagram](../img/dependencyDiagram.png)

### incrementNextRightSlotAlgorithm

![picture describing incrementNextRightSlotAlgorithm](../img/incrementNextRightSlotAlgorithm.png)

This generator is the simplest than the other because it depens on
itself. And, the generator name already self-described what this
generator does. That is, generating the sequence of number that
interpret how many brackets there are on every slot. In short,
this is just that algorithm we saw before, but in python language
form.

![picture describing outputINRSA](../img/outputINRSA.png)

### toBracket

![toBracket](../img/toBracket.png)

This generator translate that intepretation (brackets per slot),
to the form of real brackets. We can see the basis of this
generator is the case when there is only 1 bracket on the slot.
Because the only pattern that can be made is "()". If the number
of bracket per slot is other than that, the generator asks
bracketPatternMaker generator to produce all of the possible
pattern of n-1 brackets. After the bracketPatternMaker generator
give the pattern, this function put the pattern given inside an
outer bracket.

### bracketPatternMaker

![bracketPatternMaker](../img/bracketPatternMaker.png)

The bracketPatternMaker is actually just putting the output from
incrementNextRightSlotAlgorithm (which is an array), and then put
that array output to the slotObjects generator. After that, the
slotObjects generator produce the final bracket pattern.

### slotObjects & slotIterator

![slotObjects](../img/slotObjects.png)

This generator is making the object of that "number of bracket per
slot" intepretation we made, by putting each number in the array
(the one we got from incrementNextRightSlotAlgorithm) to the
"toBracket" generator. Because we just made the generator, we need
a place to store the output of that generator each time. For that,
we need to make another list that contains the output for every
objects of the "toBracket" generator.

![slotIterator](../img/slotIterator.png)

The "slotIterator" generator just iterate the list of "toBracket"
generator object that we got from the "slotObjects". The purpose
of the iteration is to produce all combination of the "toBracket"
output for each index of the list. We need to keep in mind that
list in python is passed by reference, so we dont need to bother
passing the list value on every depth of recursion. Anyway, this
is how the code works:

1. Iterate the first index of the list first, until the end of 
the generator output
2. If the generator reach the end, iterate the next index. then,
iterate the first index back again


We see that this this generator depends on the "toBracket"
generator, but not really. This generator just need the
"toBracket" generator to restart the "toBracket" objects that
already reach the end of the iteration.

![picture describing output](../img/output.png)


### Bonus

We could also add a new bracket for the slotObjects generator to
save every output from the "toBracket" generator object. That way,
we don't need to recalculate things that already calculated
before. And also this way, the output can be produced slightly
faster than before.

![picture describing bonus](../img/bonus.png)

That way, the "slotIterator" doesn't depends on the "toBracket"
generator. Because we dont need to restart the generator objects
anymore.


This is the end of the blog, thank you.
