import Head from 'next/head'
import type { ReactElement } from 'react'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import io , { Socket } from 'socket.io-client';

export default function Page() {
  
	return (
		<div>
			Gello
		</div>
	);
};

Page.layout = "layoutDefault";
Page.getLayout = (page: ReactElement) => {
  return ({ page })
}
