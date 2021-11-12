import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGreeting } from '../redux/greeting/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const fetchGreetingAction = bindActionCreators(fetchGreeting, dispatch);
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    fetchGreetingAction();
    return () => null;
  }, []);

  return (
    <h1>{greeting.message}</h1>
  )
}

export default Greeting;
